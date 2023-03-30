import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';

const MAX_FILE_SIZE = 5000000;
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
	name: z.string().max(2),
	phoneNumber: z.string(),
	beachName: z.string(),
	description: z.string(),
	location: z.string(),
	sightingDate: z.date(),
	species: z.enum(['dolphin', 'whale', 'turtle']).default('dolphin'),
	condition: z.enum(['alive', 'fresh', 'decomposition', 'mummified']).default('alive'),
	email: z.string().email({ message: 'Invalid email address' }).optional(),
	photos: photosSchema
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, schema);

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

		// TODO: upload images first and get their URL to associate with the stranding

		const response = await locals.sb.from('Stranding').insert({
			personName: form.data.name,
			phoneNumber: form.data.phoneNumber,
			description: form.data.description,
			beachName: form.data.beachName,
			location: form.data.location,
			email: form.data.email,
			sightingDate: form.data.sightingDate,
			species: form.data.species,
			condition: form.data.condition
		});

		// .then(
		// 	(value) => {
		// 		console.log(value);
		// 	},
		// 	(reason) => {
		// 		console.log(reason);
		// 		return fail(500, { form });
		// 	}
		// );

		// Yep, return { form } here too
		return { form };
	}
};

// const name = data.get('name');
// const number = data.get('number');
// const beachName = data.get('beachName');
// const description = data.get('description');
// const local = data.get('local');
// const sightingDate = data.get('sightingDate');
// const species = data.get('species');
// const hasPhotos = data.get('hasPhotos');
// const photos = data.get('photos');
// const receiveUpdates = data.get('receiveUpdates');
// const email = data.get('email');
