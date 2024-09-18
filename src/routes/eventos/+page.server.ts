import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	let { data, error: sbError } = await locals.sb.from('Events').select('*');

	if (sbError) throw error(500);

	data?.forEach((el) => {
		el.date = new Date(el.date);
	});

	return {
		events: data ?? []
	};
}) satisfies PageServerLoad;
