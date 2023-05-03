export interface Species {
	regularName: string;
	latinName: string;
	conservationState: string;
	imgUrl: string;
	description: string;
}

export interface Slide {
	imgUrl: string;
	alt: string;
}

export interface Event {
	date: string;
	hour: string;
	title: string;
	description: string;
	location: string;
	imgUrl: string;
}
