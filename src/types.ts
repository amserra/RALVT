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
	time: string;
	title: string;
	description: string;
	location: string;
	imgurl: string;
}
