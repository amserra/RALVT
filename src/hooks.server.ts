import '$lib/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { supabaseClient } = await getSupabase(event);

	event.locals.sb = supabaseClient;

	return resolve(event);
};
