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
			strandings: 'Learn about what strandings are and what to do if you notice one.',
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
				'The Lisbon and Tagus Valley Stranding Network (Rede de Arrojamentos de Lisboa e Vale Tejo – RALVT), started operating in 2021 and belongs to the National Stranding Network, acting in the Lisbon and Tagus Valley region, between Lourinhã and Setúbal. This network is the result of a collaboration between MARE-ISPA (Centro de Ciências do Mar e Ambiente – Instituto Universitário de Ciências Psicológicas, Sociais e da Vida), ICNF (Instituto de Conservação da Natureza e Florestas) and Fundo Ambiental (Ministério do Ambiente). Our main goal is to respond to alerts of marine mammals and sea turtles strandings (whether the animal is alive or not) that occur in our region.'
		},
		mission: {
			title: 'Our mission',
			text1:
				"RALVT's response to marine animal strandings allows us to collect information about these species, allowing us to broaden out understanding and implement conservation strategies for these species. Together with each municipal authority, our team streamlines the transport of the stranded animal. Additionally, through educational activities of the population, we can promote the ocean literacy as well as incentivize the general population to preserve the habitats and promote the conservation of marine species.",
			bulletPoints: {
				necropsies: {
					title: 'Necropsies.',
					text: 'When the animals are stranded dead, it is important to attempt to determine the cause of death, with samples’ collection. The necropsies are also fundamental for studying and helping increase the knowledge about these species.'
				},
				liveSightings: {
					title: 'Assistance to live strandings.',
					text: 'We operate on a 24/7 schedule, which allows RALVT to respond to live strandings. In these cases, our number one priority is to stabilize the animal and make it as comfortable as possible.'
				},
				monitorings: {
					title: 'Monitoring.',
					text: 'By regularly monitoring the beaches in our region, we can collect systematic information, allowing us to also detect some strandings before they are reported. Besides that, these reconnaissance missions allows us to map the beach morphology in order to plan the best routes, especially in areas of difficult access in order to have a faster response time.'
				},
				education: {
					title: 'Environmental education.',
					text: 'We want to promote ocean literacy with environmental education, science projects, training sessions and webminars with the general population and by collaborating with local organizations. Additionally, we have volunteer programs and curricular internships that allow us to work with students that are interested in exploring this subject.'
				}
			},
			highlights: {
				necropsies: {
					number: '+216 strandings',
					text: 'Since 2021'
				},
				trash: {
					number: '+613kg',
					text: 'Of garbage collected since 2021'
				},
				events: {
					number: '+30 events',
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
			description:
				'In mainland Portugal, 28 species of marine mammals have been described. Worldwide, this number increases to 90 species. Cetaceans are an extremely diverse group, possessing different dialects, social structures, routines and feeding habits. Cetaceans are divided into two groups, Odontoceti or toothed whales and Mysticeti or baleen whales. These animals have a very significant ecological representativeness, and are severely impacted by various anthropogenic activities, such as pollution, bycatching, trafficking and by activities that interrupt breeding or feeding events.',
			commonDolphin: {
				regularName: 'Common Dolphin',
				conservationState: 'Little Concern',
				description:
					'The common dolphin is a species that can be found in every ocean. Adults can measure up to 2.7m and weigh up to 200kg, while calves can reach up to 85cm and weigh around 10kg. Generally speaking, they are found in pods of hundreds of individuals. Common dolphins are considered very agile and develop aerial behaviours, often interacting with ships in a behaviour called “bow riding”. They feed mainly on fish and cephalopods (squid and octopi). Their average lifespan is 35 years.'
			},
			stripedDolphin: {
				regularName: 'striped dolphin',
				conservationState: 'Little Concern',
				description:
					'The stripped dolphin can be found in tropical and temperate waters. Adults can measure up to 2.5m and weigh up to 160kg. In general, they are found in pods of 20-50 individuals. Striped dolphins exhibit aerial behaviours but are cautious when approaching boats. They feed mainly on fish and cephalopods (squid and octopi). Their average lifespan is 30 years.'
			},
			bottlenoseDolphin: {
				regularName: 'bottlenose dolphin',
				conservationState: 'Little Concern',
				description:
					'The bottlenose dolphin is a species that can be found worldwide and in Portugal there is a resident pod in the Sado river estuary with 28 individuals. Adults can measure up to 3.9m and weigh up to 635kg. This species can be seen in smaller pods, between 2-15 individuals, or larger pods. They feed mainly on fish and cephalopods (squid and octopi). Their average lifespan is 52 years.'
			},
			minkeWhale: {
				regularName: 'minke whale',
				conservationState: 'Little Concern',
				description:
					'The minke whale is a migratory species present in several oceans worldwide. Adults can measure up to 9.8m and weigh up to 10 tons. They are a solitary species, but they are sometimes found in small pods. They feed on fish and crustaceans, especially krill. Minke whales are shy animals and generally avoid ships.'
			},
			spermWhale: {
				regularName: 'sperm whale',
				conservationState: 'Vulnerable',
				description:
					'The sperm whale is the biggest toothed cetacean, having a blowhole located in the frontal part of the head, slightly deviated to the left. These animals have a square skull that is big when compared to the rest of the body. Adults can measure up to 20m and weigh up 57 tons. They feed on squid, crustaceans and fish. Their average lifespan is 60 years. The sperm whale can dive to depths of 2000m and for as long as 40 minutes at a time.'
			}
		},
		turtles: {
			title: 'Turtles',
			description:
				'There are over 300 species of turtles in the world, but only 7 of them are sea turtles. In Portugal, we can observe 5 of those 7 species, the most common being the Loggerhead Turtle and the Leatherback Turtle. Having evolved from land animals, the sea turtles still have some common characteristics, such as the need to breath air and to incubate their eggs in nests dug on the beach. Female turtles return to their birthplace in order to make their nests.',
			leatherbackTurtle: {
				regularName: 'Leatherback turtle',
				conservationState: 'Vulnerable',
				description:
					'The leatherback turtle is the biggest species of turtle on the planet. They don’t have plates or a hard shell. This species exhibits migratory behaviours and can dive to great depths. They are solitary animals and spend most of their time in the ocean, with females going to the beaches to make nests and lay their eggs. Adults can measure up to 2.5m and weigh up to 500kg. This species feeds mainly on jellyfish and molluscs. Their average lifespan is 50 years.'
			},
			greenTurtle: {
				regularName: 'Green turtle',
				conservationState: 'Endangered',
				description:
					'The green turtle is a species that is widespread with migratory behaviours. They can measure up to 1.5m and weigh up to 190kg. This is a solitary species that has an herbivore diet composed mainly of plants and algaes, and because of this their beak is serrated. Their internal fat tissue is green.'
			},
			commonTurtle: {
				regularName: 'Loggerhead turtle',
				conservationState: 'Vulnerable',
				description:
					'The loggerhead turtle is a widespread species that can measure up to 1.5m and weigh up to 180kg. They are solitary animals with an omnivorous diet. These turtles are often seen with organisms in their shells like limpets, crabs, algaes and epibionts.'
			}
		},
		birds: {
			title: 'Birds',
			description:
				'In mainland Portugal, we can find 65 species of marine birds, spread across several taxonomic groups.',
			yellowLeggedGull: {
				regularName: 'Yellow-legged Gull',
				conservationState: 'Little Concern',
				description:
					'The yellow/legged gull is a resident species in Portugal with a wingspan of up to 140cm. They can weigh up to 620-1100g and feed on fish, invertebrates, reptiles, small mammals and trash. In Portugal, we can observe this species all year, near the coast, in natural areas or urban areas. Their lifespan is 20 years.'
			},
			greatCormorant: {
				regularName: 'Cormorant',
				conservationState: 'Little Concern',
				description:
					'The cormorant is a wintering species resident in mainland Portugal, most commonly between September and April. Their diet is composed mainly of fish. Their wingspan can measure up to 110cm and they can weigh up to 2500g. The cormorant can spend more than a minute underwater; however, their feathers aren’t waterproof creating the need to dry after a dive.'
			},
			razorbill: {
				regularName: 'Razorbill',
				conservationState: 'Little Concern',
				description:
					'The razorbill is a small species that can be seen in Portugal between November and March along the coast. Their wingspan can measure up to 67cm and they can weigh up to 590-730g. They feed mostly of small fishes and krill. Their average lifespan is 20 years; however, some individuals can live up to 40 years. This species can dive to depths up to 120m, the equivalent of a 10-story building.'
			},
			atlanticPuffin: {
				regularName: 'Atlantic Puffin',
				conservationState: 'Vulnerable',
				description:
					'The atlantic puffin can only be found in the North Atlantic. In mainland Portugal it is a wintering species and a passing by migrant. They can be observed between October and April along our entire coast; however, they spend most of their time in high sea. The atlantic puffin feeds mostly on fish, but there is not a lot of information on its diet.'
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
			text1: 'What is the proportion of live vs. dead strandings?',
			text2:
				'Between January and December 2023, RALVT recorded 2.5% of live strandings and 97.5% of dead strandings.',
			callToAction: {
				reportStranding: 'Report a stranding',
				knowMore: 'To know more'
			},
			map: {
				specie: 'Species',
				reportedOn: 'Reported to',
				helpText: 'The map above shows the strandings that were reported to us. '
			}
		},
		whatIs: {
			title: 'What is a stranding?',
			text: 'A stranding is a situation where a marine animal, alive or dead, beaches on shore and can’t return to the water without aid. In Portugal most strandings are of cetaceans (whales and dolphins), marine turtles or marine birds. Occasionally, strandings of other marine mammals occur, such as seals.',
			aliveStranding: {
				title: 'Live stranding',
				text: 'Live strandings are very complex situations, and each case is different and unique. Usually, animals that beach alive aren’t very healthy and for this reason it may not always be possible to return them to the sea. The main goal is always to assess the animal’s heath status and the viability of its recovery/refloating. In cases where the recovery/refloating of the animal is not viable, measures are taken to reduce its suffering.'
			},
			deadStranding: {
				title: 'Dead stranding',
				text: 'A dead animal being beached will always be an important fact, because the real number of animals dying is much higher than the number of animals that wash up on the beaches. However, the number of samples we collect in each stranding depends on the decomposition state of the stranded animal. Some of the data we collect includes biometric data (size and weight), biological/tissue samples and cause of death.'
			}
		}
	},
	events: {
		title: 'Events',
		futureEvents: 'Next events',
		pastEvents: 'Past events',
		details: 'Details',
		noFutureEvents: 'There are no events at the moment. ',
		noPastEvents: "We haven't done any events yet. "
	},
	howToHelp: {
		hero: {
			title: 'We are a dedicated and inclusive team, whose goal is to conserve the oceans.',
			text: 'To be able to carry out our work, we need help from the community and the people around us. We try to involve the community in our activities and are able to offer YOU the chance to join us in this path to protect the cetaceans and sea turtles of our coast.'
		},
		actions: {
			title: 'We are always looking for people who want to help',
			text: 'By supporting us, you are contributing to the conservation of cetaceans and sea turtles on the Portuguese coast.',
			volunteering: {
				title: 'Volunteers and Internships',
				text: 'Our volunteer and internship programs allow people from around the world to become a part of our team and join us in our ocean conservation mission. Depending on the area of study, there is also the possibility of elaborating projects for internship report or dissertations.',
				buttonText: 'Sign up as a volunteer'
			},
			beachCleaning: {
				title: 'Beach clean-ups, webminars and other events',
				text: 'Please consult our event page to know more about future events.',
				buttonText: 'See our calendar'
			},
			report: {
				title: 'Report, Report, Report!',
				text: 'Contact us, as soon as possible, if you find a stranded animal to help us collect data. Also, if you sight a live animal close to the shore let us know so we can monitor these animals as well.',
				buttonText: 'Report a stranding'
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
			abrigos: 'ABRIGOS - Marine Mammal Support Network / ICNF',
			raalg: 'Algarve Arrojamentos Network (RAAlg)'
		},
		recoveryCenters: {
			title: 'Recovery Centers',
			crassa: 'CRASSA - Santo André Wild Animal Recovery Center',
			zoomarine: "Porto d'Abrigo do Zoomarine (Albufeira)",
			lxcras: 'LxCRAS- Lisbon Wild Animal Recovery Center',
			ecomare: 'ECOMARE - Marine Animal Rehabilitation Center (CRAM)',
			crasm: 'Centro de Recuperação de Animais Selvagens de Montejunto (CRASM)'
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
			dateOfStranding: 'Date on which the stranding was detected',
			dateOfSighting: 'Date you saw the animal',
			species: 'Species',
			animalCondition: 'Animal condition',
			photos: 'Photographs',
			photosStrandingHelpText: 'Optionally add photographs of the stranding',
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
			formErrorBody: 'Internal error when submitting the form. '
		}
	},
	privacyPolicy: {
		header: 'Privacy Policy',
		subHeader:
			'According to article 13th of Regulation of the European Data Protection (Reg. UE 2016/679)',
		intro:
			'In this Privacy Policy, you can find all the information to understand better how we will process your data. ',
		sections: {
			'1': {
				title: '1. Responsible for the treatment,
				content:
					'RALVT is responsible for treating the  data we collected on our website. You can contact us, via email, at the mailing address.'
			},
			'2': {
				title: '2. Purpose of the treatment and legal basis.',
				content: {
					'21': 'In the table below, you can verify the categories of the data we process and how we use it.',
					'22': 'Not all situations will likely apply to your case, as the data we collect is dependent on the form you complete. However, we choose to provide information on all possible scenarios.',
					'23': 'The personal data collected in each is requested in the various forms and will be intended for the purpose inherent to each specific action or situation. Personal data marked with an asterisk (*) is mandatory.',
					dataCategories: {
						title: 'Data Categories and Purpose:',
						'1': {
							header: 'a) Identification data: name, phone number and email address',
							text: 'name, phone number and email address – These serve as a way to allow future contact to obtain further information or clarify the information given about the stranding/sighting of a marine animal, or to communicate feedback on your report.'
						},
						'2': {
							header: 'b) Photographs',
							text: 'Their submission is optional, and they are used to collect visual information about the sighting/stranding of the marine animal. '
						},
						'3': {
							header: 'c) Location.',
							text: 'The submission of the location is optional, and the information is only available after the user’s permission. The choice is saved and utilized in future; however, the user can change their preference at any time. The location is used to identify, in GPS coordinates the location of the sighting/stranding.'
						}
					}
				}
			},
			'3': {
				title: '3. Categories of Data Recipients,
				content: {
					'31': 'In order for the data to be processed adequately, for the purposes identified in 2., RALVT will allow your personal data to be processed by the following entities:',
					authorized:
						'Individuals, employees, or collaborators designated to carry out one or more of the data processing activities. These are classified as “Authorized Personnel”, as per article 29 of the data protection regulation;',
					publicEntities:
						'Individuals, employees, or collaborators designated to carry out one or more of the data processing activities. These are classified as “Authorized Personnel”, as per article 29 of the data protection regulation.',
					authoroties:
						'According to article 4/9 of the regulation, “public authorities which may receive personal data in the framework of a particular inquiry per Union or Member State law shall not be regarded as recipients”.',
					outsideEEE:
						'Please note that RALVT or our subcontractors may store your data outside de EEE. In that case, we will ensure that these subcontractors are subject to legislation that has been deemed by the European Commission to provide an adequate degree of protection and are therefore covered by an adequacy decision or equivalent.'
				}
			},
			'4': {
				title: '4. Retention Period',
				content:
					'RALVT will retain your data while analysing the reported stranding/sighting, for the purposes related to its processing. This process occurs, without prejudice to the exercise of your right to object where applicable. After the end of the analysis of the occurrence, we may keep your data to prove compliance with legal obligations, namely the data protection regulation, fiscal legislation, and legislation regarding distance selling, among others. In this case, we will only keep the data that is necessary for this purpose and this data will be kept fully blocked and pseudonymised. They will only be accessible to specially authorized persons and exclusively for the fulfilment of the above-mentioned purposes. Even so, they will only be kept for the duration of the limitation period of the obligation in question, which may vary depending on the applicable legislation.'
			},
			'5': {
				title: '5. Rights of the Data Provider',
				'51': 'You may exercise the following rights, as provided for by the data protection regulation, by emailing geral@ralvt.pt.',
				content: {
					rights: [
						'Right to access your personal information;',
						'Right to rectify your data;',
						'Right to delete your data;',
						'Right to limit the processing of the data;',
						'Right to portability;',
						'Right to object;',
						'Right to object to marketing communications;',
						'Right to file a complaint with the CNPD - National Data Protection Commission (www.cnpd.pt); In this case, we ask you to contact us before filing the complaint with the CNPD to quickly resolve the reported problem.'
					]
				},
				'52': 'You can contact us, at 911 111 241, to request information on how to exercise your rights.',
				'53': 'Whenever your data is processed based on consent, you may withdraw your consent at any time, without compromising the lawfulness of the processing carried out based on the consent previously given.',
				'54': 'To complete your request, we can request additional information to identify it, as per article 11 of the data protection regulation in conjunction with recital 67.',
				final:
					'In the event of an unjustified refusal to identify yourself, if we cannot identify you in any other way, we reserve the right not to respond to your request.'
			},
			'6': {
				title: '6. Data Protection Officer',
				content:
					'RALVT has appointed a data protection officer that can be contacted via email, at geral@ralvt.pt'
			},
			'7': {
				title: '7. Security',
				content:
					'RALVT has implemented and maintained security measures and technical and organization policies to assure the safety of the personal data that we process. These measures include, in particular, the execution of confidentiality agreements with our employees and suppliers; policies restricting and controlling access to personal data; destruction or anonymization of personal data that is no longer necessary for the purpose it was collected; Because information security depends in part on the security of your computer or electronic device that you use to communicate with us, and the security you employ to protect usernames and passcodes, please take appropriate steps to protect this information.'
			},
			'8': {
				title: '8. Version and Changes',
				content:
					'This privacy policy was last amended on May 20th, 2023. RALVT may make changes to the content of this privacy policy. Such changes shall be communicated to the user, per the law.'
			}
		}
	}
} satisfies BaseTranslation;

export default en;
