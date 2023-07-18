import type { LayoutServerLoad } from './$types';
import { detectLocale, locales } from '$lib/i18n/i18n-util';
import { redirect } from '@sveltejs/kit';
import { pick } from 'accept-language-parser';

const langParam = 'lang';

export const load = (async (event) => {
	// Using a GET var "lang" to change locale
	const newLocale = event.url.searchParams.get(langParam);
	if (newLocale) {
		event.cookies.set(langParam, newLocale, { path: '/' });
		event.url.searchParams.delete(langParam);
		// Redirect to remove the GET var
		throw redirect(303, event.url.toString());
	}
	// Get locale based on cookie or based on accept-language (if cookie not set)
	let lang = event.cookies.get(langParam);
	const acceptedLanguages = event.request.headers.get('accept-language');
	if (!lang && acceptedLanguages) {
		lang = pick(locales, acceptedLanguages)?.toString();
	}

	// Get the locale from the cookie
	const locale = detectLocale(() => [lang ?? '']);
	return { locale };
}) satisfies LayoutServerLoad;
