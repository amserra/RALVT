import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { setError, superValidate, message } from 'sveltekit-superforms/server';
import nodemailer from 'nodemailer';
import { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: EMAIL_HOST,
	port: 587,
	secure: false,
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS
	}
});

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
	phoneNumber: z.string().optional(),
	beachName: z.string(),
	description: z.string(),
	location: z.string({ invalid_type_error: 'Enter a location' }).nonempty('Enter a location'),
	sightingDate: z.coerce.date().max(new Date(), { message: 'Future dates are not allowed' }),
	species: z.enum(['dolphin', 'whale', 'turtle']).default('dolphin'),
	condition: z.enum(['alive', 'fresh', 'decomposition', 'mummified']).default('alive'),
	email: z.string().email({ message: 'Invalid email address' }).optional(),
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

			const { data, error } = await locals.sb.storage.from('strandings').upload(filePath, file);
			if (data) filesPaths.push(data.path);

			if (error) {
				return message(form, 'error', {
					status: 500
				});
			}
		}

		const name = form.data.name?.trim();
		const description = form.data.description.trim();
		const beachName = form.data.beachName.trim();
		const { error } = await locals.sb.from('Stranding').insert({
			name: name,
			phoneNumber: form.data.phoneNumber,
			description: description,
			beachName: beachName,
			location: form.data.location,
			email: form.data.email,
			sightingDate: form.data.sightingDate,
			species: form.data.species,
			condition: form.data.condition,
			photos: filesPaths
		});

		if (error) {
			return message(form, 'error', {
				status: 500
			});
		}

		const emailText = `Existe um novo alerta de arrojamento no site, de um ${form.data.species}.
    Submetido por ${name ?? 'Anónimo'} com a mensagem "${description}, na ${beachName}".`;

		transporter.sendMail({
			from: '"RALVT" <geral@ralvt.pt>',
			to: 'geral@ralvt.pt',
			subject: 'Novo alerta de arrojamento',
			text: emailText,
			html: emailText
		});

		return message(form, 'valid');
	}
};
