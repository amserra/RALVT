import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	let { data, error: sbError } = await locals.sb
		.from('Stranding')
		.select('species,location,created_at')
		.eq('confirmed', true);

	return {
		strandings: data ?? []
	};
}) satisfies PageServerLoad;
