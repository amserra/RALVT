import type { BaseTranslation } from '../i18n-types';

const en = {
	RALVT: 'Lisbon and Tagus Valley Network of Strandings',
	languages: {
		pt: 'Portuguese',
		en: 'English'
	},
	links: {
		theRalvt: 'RALVT',
		species: 'Species',
		strandings: 'Strandings',
		events: 'Events',
		howToHelp: 'How to help',
		contacts: 'Contacts',
		privacyPolicy: 'Privacy Policy'
	},
	meta: {
		head: {
			theRalvt: 'About RALVT',
			species: 'Species',
			strandings: 'Strandings',
			events: 'Events',
			howToHelp: 'How to help',
			contacts: 'Contacts',
			privacyPolicy: 'Privacy Policy',
			reportStranding: 'Report stranding',
			reportSighting: 'Report sighting'
		},
		description: {
			home: 'RALVT is the venture network in the Lisbon and Tagus Valley region.',
			theRalvt: 'About RALVT, the venture network in the Lisbon and Tagus Valley region.',
			species: 'Discover more about the species we treat at RALVT.',
			strandings: 'Learn about what a dashing is and what to do if you notice one.',
			events: 'Discover our upcoming events.',
			howToHelp: 'Find out how you can help us in our mission.',
			contacts: 'Get access to relevant contacts.',
			privacyPolicy: 'Find out how we handle your data.',
			reportStranding: 'Report an animal being thrown.',
			reportSighting: 'Report an animal sighting.'
		}
	},
	partners: 'With the support of:',
	report: 'Report',
	stranding: 'Stranding',
	sighting: 'Sighting',
	websiteCreatedBy: 'Website created by',
	callForTheNationalMobileNetwork: 'Call to the national mobile network',
	theRalvt: {
		hero: {
			title: 'We are RALVT',
			text1:
				'RALVT, Network of Arrojamentos de Lisboa e Vale do Tejo, started operating in 2021 and is part of the National Network of Arrojamentos, operating between the region of Lisbon and Vale do Tejo, between the municipalities of Lourinhã and Setúbal. ',
			text2:
				'In addition to RALVT, there are 3 more regional arrojamentos networks: Rede do Norte (Caminha to Peniche), ARROJAL (Tróia to Odeceixe) and RAAlg (Odeceixe to Vila Real de Santo António), all of which are part of the National Arrojamentos Network, coordinated by ICNF.'
		},
		mission: {
			title: 'Our mission',
			text1:
				'Through the assistance provided in situations involving marine animals and the collection of information about these species, our mission is divided between the establishment of basic knowledge that allows the implementation of efficient conservation measures for marine species, and the promotion of Animal Literacy. Oceans through educational activities for the general population.',
			bulletPoints: {
				necropsies: {
					title: 'Necropsies.',
					text: 'Essential for obtaining information about these marine species, necropsies are an essential part of our work, allowing us to prepare reports on the cause of death of animals when the condition of the animal allows it. '
				},
				liveSightings: {
					title: 'Assistance to live strandings.',
					text: '24/7 availability allows RALVT to respond in situations where animals wash up on the beach alive. '
				},
				monitorings: {
					title: 'Monitoring.',
					text: 'We carry out regular monitoring of the beaches in the area of ​​operation, in order to allow systematic collection of information, being able to detect attacks without warning. '
				},
				education: {
					title: 'Environmental education.',
					text: 'We want to promote Ocean Literacy through environmental education activities, citizen science projects, trainings and webinars for the general population and local organizations that want to help us. '
				}
			},
			highlights: {
				necropsies: {
					number: '150 necropsies',
					text: 'Since 2021'
				},
				trash: {
					number: '400kg',
					text: 'Of garbage collected in 2023'
				},
				events: {
					number: '15 events',
					text: 'Held since 2021'
				}
			}
		},
		team: {
			title: 'Our team',
			text: 'RALVT is made up of a multifaceted team made up of marine biologists and veterinarians, allowing for a complementarity of areas of activity. ',
			roles: {
				VeterinarianMale: 'Veterinarian',
				VeterinarianFemale: 'Veterinarian',
				marineBiologistFemale: 'Marine biologist',
				biologistFemale: 'Biologist',
				coordinatorMale: 'Coordinator',
				coordinatorFemale: 'Coordinator',
				operations: 'Operations',
				administrative: 'Administrative',
				outreach: 'Disclosure',
				scientificDepartment: 'Scientific department'
			}
		}
	},
	species: {
		cetaceans: {
			title: 'Cetaceans',
			description: 'In mainland Portugal, 28 species of marine mammals are described. ',
			commonDolphin: {
				regularName: 'Common Dolphin',
				conservationState: 'Little Concern',
				description: "The common dolphin is a species that can be found in all the world's oceans. "
			},
			stripedDolphin: {
				regularName: 'striped dolphin',
				conservationState: 'Little Concern',
				description: 'The striped dolphin can be found in tropical and temperate waters. '
			},
			bottlenoseDolphin: {
				regularName: 'bottlenose dolphin',
				conservationState: 'Little Concern',
				description:
					'The bottlenose dolphin can be found worldwide, and in Portugal it has a resident population in the Sado estuary with 28 individuals (is that right?). '
			},
			minkeWhale: {
				regularName: 'minke whale',
				conservationState: 'Little Concern',
				description:
					'The dwarf whale is a migratory species that is present in several oceans on the planet. '
			},
			spermWhale: {
				regularName: 'sperm whale',
				conservationState: 'Vulnerable',
				description:
					'The sperm whale is the largest cetacean with teeth, having only one spiracle that is located at the front of the head and deviated slightly to the left. '
			}
		},
		turtles: {
			title: 'Turtles',
			description:
				'There are more than 300 species of turtles around the world, but only 7 are marine, and in Portugal we can see 5 species. ',
			leatherbackTurtle: {
				regularName: 'Leather turtle',
				conservationState: 'Vulnerable',
				description: 'The leatherback turtle is the largest species of turtle on the planet. '
			},
			greenTurtle: {
				regularName: 'Green turtle',
				conservationState: 'In danger',
				description: 'This species has a global distribution, and presents migratory behaviors. '
			},
			commonTurtle: {
				regularName: 'loggerhead turtle',
				conservationState: 'Vulnerable',
				description:
					'Distributed globally, these turtles can measure up to 1.5 m and can weigh up to 180 kg. '
			}
		},
		birds: {
			title: 'Birds',
			description:
				'In mainland Portugal, we can find several taxonomic groups, with 65 species of seabirds.',
			yellowLeggedGull: {
				regularName: 'Yellow-legged Gull',
				conservationState: 'Little Concern',
				description: 'Species resident in Portugal with a wingspan of up to 140 cm. '
			},
			greatCormorant: {
				regularName: 'Cormorant',
				conservationState: 'Little Concern',
				description:
					'Wintering species resident in mainland Portugal, most common between September and April. '
			},
			razorbill: {
				regularName: 'diving thrush',
				conservationState: 'Little Concern',
				description:
					'A small species that can be seen in Portugal between November and March along the coast. '
			},
			atlanticPuffin: {
				regularName: 'Sea parrot',
				conservationState: 'Vulnerable',
				description:
					'It can only be found in the North Atlantic and in mainland Portugal. It is a wintering species and a passage migrant. '
			}
		},
		names: {
			dolphin: 'Dolphin',
			whale: 'Whale',
			turtle: 'Turtle',
			bird: 'Bird',
			animal: 'Animal'
		}
	},
	strandings: {
		hero: {
			title: 'Strandings',
			text1: 'What is the proportion of live vs. dead attacks?',
			text2:
				'Between January and October 2022, RALVT recorded 7% of live attacks to 93% of dead attacks.',
			callToAction: {
				reportStranding: 'Report a dare',
				knowMore: 'To know more'
			},
			map: {
				specie: 'Species',
				reportedOn: 'Reported to',
				helpText: 'The map above shows the attacks that were reported to us. '
			}
		},
		whatIs: {
			title: 'What is a stranding?',
			text: 'It is called stranding when a marine animal, dead or alive, runs aground on the coast and is unable to return to the water without assistance. ',
			aliveStranding: {
				title: 'Live stranding',
				text: 'Live attacks are very complex situations, in which each situation has unique characteristics. '
			},
			deadStranding: {
				title: 'Dead stranding',
				text: 'A dead animal being washed up will always be an important fact, because the real number of animals dying is much higher than the number of animals that wash up on the beaches. '
			}
		}
	},
	events: {
		title: 'Events',
		futureEvents: 'next events',
		pastEvents: 'Past events',
		details: 'Details',
		noFutureEvents: 'There are no events at the moment. ',
		noPastEvents: "We haven't done any events yet. "
	},
	howToHelp: {
		hero: {
			title: 'We are a dedicated and inclusive team, whose goal is to conserve the oceans.',
			text: 'To be able to carry out our work, we need help from the community and the people around us. '
		},
		actions: {
			title: 'We are always looking for people who want to help',
			text: 'By supporting us, you are contributing to the conservation of cetaceans and sea turtles on the Portuguese coast. ',
			volunteering: {
				title: 'Volunteering and internships',
				text: 'Volunteer and internship program, which allows people from all over the world to join our team and join in the preservation of the oceans. ',
				buttonText: 'Sign up as a volunteer'
			},
			beachCleaning: {
				title: 'Beach cleanups, webinars and other actions',
				text: 'Check out our events page to find out more.',
				buttonText: 'See our calendar'
			},
			report: {
				title: 'Report, Report, Report',
				text: 'Contact us as soon as possible whenever you see a stranded animal, to help us with systematic data collection. ',
				buttonText: 'Report a dare'
			}
		}
	},
	contacts: {
		title: 'Talk to us',
		subtitle: 'Useful contacts in case of emergency.',
		lisbonAndTagusValley: {
			title: 'Lisbon and Tagus Valley',
			maritimePolicePeniche: 'Maritime Police Port of Peniche/Lourinhã/Torres Vedras',
			civilProtection: 'Sesimbra Civil Protection',
			maritimePolcieSesimbra: 'Sesimbra Maritime Police',
			capitancyCascais:
				'Port Authority of Cascais (From the tip of Foz (Sisandro river) to the Torre de S. Julião da Barra)',
			maritimePoliceAlmada: 'Almada Maritime Police',
			maritimeDelegationEriceira: 'Ericeira Maritime Delegation',
			localCommandLisbon: 'Lisbon Local Command'
		},
		otherStrandingNetworks: {
			title: 'Other stranding networks',
			arrojal:
				'ARROJAL - Support for the National Arrojamentos Network - Alentejo Regional Network',
			abrigos: 'SHELTERS - Marine Mammal Support Network / ICNF',
			raalg: 'Algarve Arrojamentos Network (RAAlg)'
		},
		recoveryCenters: {
			title: 'Recovery Centers',
			crassa: 'CRASSA - Santo André Wild Animal Recovery Center',
			zoomarine: "Porto d'Abrigo do Zoomarine (Albufeira)",
			lxcras: 'LxCRAS- Lisbon Wild Animal Recovery Center',
			ecomare: 'ECOMARE - Marine Animal Rehabilitation Center (CRAM)'
		}
	},
	floating: {
		title: 'Found a stranded animal?',
		text: 'Alert us using our form'
	},
	form: {
		stranding: {
			text: 'Report stranding',
			description: 'Found a stranded animal?',
			link: 'our page about strandings'
		},
		sighting: {
			text: 'Report sighting',
			description: ''
		},
		fields: {
			name: 'Your name',
			phone: 'Phone number',
			beachName: 'Beach name',
			beachNameHelpText: 'ex. ',
			description: 'Description of the situation',
			location: 'Location',
			locationHelpText: 'Click on the map to select the point',
			dateOfStranding: 'Date on which the dashing was detected',
			dateOfSighting: 'Date you saw the animal',
			species: 'Species',
			animalCondition: 'Animal condition',
			photos: 'Photographs',
			photosStrandingHelpText: 'Optionally add photographs of the dashing',
			photosSightingHelpText: 'Optionally add photographs of the sighting',
			dropzone: {
				photosText: '{0} photography{{s}} selected{{s}}',
				uploadText1: 'Upload one or more photographs',
				uploadText2: 'or large here',
				uploadText3: 'PNG, JPG, GIF up to 5MB, maximum {maxFiles} files'
			},
			receiveUpdates: 'Receive updates',
			receiveUpdatesHelpText: 'Optionally receive updates on the development of the stranding',
			email: 'Email address',
			privacyPolicyConsentText: 'I declare that I have read and accept the terms described in',
			privacyPolicyConsentLink: 'Privacy Policy',
			animalConditions: {
				alive: 'Alive',
				fresh: 'Fresh',
				decomposing: 'Decomposing',
				mummified: 'Mummified'
			}
		},
		buttons: {
			reportStranding: 'Report stranding',
			reportSighting: 'Report sighting'
		},
		messages: {
			sending: 'Sending',
			formSuccessTitle: 'Form submitted',
			formErrorTitle: 'Error submitting form',
			formSuccessBody: 'Thank you for submitting the form',
			formErrorBody: 'Internal error when submitting form. '
		}
	}
} satisfies BaseTranslation;

export default en;
