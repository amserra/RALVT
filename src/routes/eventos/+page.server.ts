import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { SUPABASE_URL } from '$env/static/private';

const baseUrl = `${SUPABASE_URL}/storage/v1/object/public/events/`;

export const load = (async ({ locals }) => {
	let { data, error: sbError } = await locals.sb.from('Events').select('*');

	if (sbError) throw error(500);

	data?.forEach((el) => {
		el.imgurl = baseUrl + el.imgurl;
	});

	return {
		events: data ?? []
	};
}) satisfies PageServerLoad;
