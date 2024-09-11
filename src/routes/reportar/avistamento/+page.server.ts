import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { setError, superValidate, message } from 'sveltekit-superforms/server';

const MAX_FILE_SIZE = 5242880; // 5 MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const photosSchema = z
	.custom<File[]>((files) => files instanceof Array && files.every((file) => file instanceof File))
	.refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), 'Max size is 5MB.')
	.refine(
		(files) => files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
		'Only .jpg, .jpeg, .png and .webp formats are supported.'
	)
	.optional(); // arr of files

const schema = z.object({
	name: z.string().optional(),
	description: z.string(),
	location: z.string({ invalid_type_error: 'Enter a location' }).nonempty('Enter a location'),
	sightingDate: z.coerce.date().max(new Date(), { message: 'Future dates are not allowed' }),
	species: z.enum(['dolphin', 'whale', 'turtle']).default('dolphin'),
	photos: photosSchema
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, schema);

		const files = formData.getAll('photos');

		// SuperForms can't yet validate custom form fields
		// therefore we have to validate the photos field manually and insert
		// the error manually if exists
		const fileValidationResult = photosSchema.safeParse(files);
		if (!fileValidationResult.success) {
			setError(form, 'photos', fileValidationResult.error.errors[0].message);
		}

		if (!form.valid) return fail(400, { form });

		const today = new Date().toISOString();
		const folderName = today;
		let filesPaths: string[] = [];

		for (let [index, f] of files.entries()) {
			const file = f as File;
			const extension = file.type.split('/').pop() ?? '.png';
			const filePath = `${folderName}/file${index + 1}.${extension}`;

			const { data, error } = await locals.sb.storage.from('sightings').upload(filePath, file);
			if (data) filesPaths.push(data.path);

			if (error) {
				return message(form, 'error', {
					status: 500
				});
			}
		}

		const { error } = await locals.sb.from('Sighting').insert({
			name: form.data.name?.trim(),
			description: form.data.description.trim(),
			location: form.data.location,
			sightingDate: form.data.sightingDate,
			species: form.data.species,
			photos: filesPaths
		});

		if (error) {
			return message(form, 'error', {
				status: 500
			});
		}

		return message(form, 'valid');
	}
};
