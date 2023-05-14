import gb from './gb.svg';
import pt from './pt.svg';

export function assetToFlag(lang: string) {
	switch (lang) {
		case 'en':
			return gb;
		case 'pt':
			return pt;
		default:
			return null;
	}
}
