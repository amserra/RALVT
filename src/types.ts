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
	date: Date;
	title: string;
	description: string;
	location: string;
	imgurl: string;
}

export interface Stranding {
	species: string;
	location: string;
	created_at: string;
}
