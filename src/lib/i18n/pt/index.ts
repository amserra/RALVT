import type { Translation } from '../i18n-types';

const pt = {
	RALVT: 'Rede de Arrojamentos de Lisboa e Vale do Tejo',
	languages: {
		pt: 'Português',
		en: 'Inglês'
	},
	links: {
		theRalvt: 'A RALVT',
		species: 'Espécies',
		strandings: 'Arrojamentos',
		events: 'Eventos',
		howToHelp: 'Como ajudar',
		contacts: 'Contactos',
		privacyPolicy: 'Política de Privacidade'
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
			home: 'A RALVT é a rede de arrojamentos da região de Lisboa e Vale do Tejo.',
			theRalvt: 'Sobre a RALVT, a rede de arrojamentos da região de Lisboa e Vale do Tejo.',
			species: 'Descobra mais sobre as espécies que tratamos na RALVT.',
			strandings: 'Aprenda sobre o que é um arrojamento e o que fazer caso detete um.',
			events: 'Descubra os nossos próximos eventos.',
			howToHelp: 'Descubra como nos pode ajudar na nossa missão.',
			contacts: 'Tenha acesso a contactos relevantes.',
			privacyPolicy: 'Descubra como tratamos dos seus dados.',
			reportStranding: 'Reporte um arrojamento de um animal.',
			reportSighting: 'Reporte um avistamento de um animal.'
		}
	},
	partners: 'Com o apoio de:',
	report: 'Reportar',
	stranding: 'Arojamento',
	sighting: 'Avistamento',
	websiteCreatedBy: 'Website criado por',
	callForTheNationalMobileNetwork: 'Chamada para a rede móvel nacional',
	theRalvt: {
		hero: {
			title: 'Somos a RALVT',
			text1:
				'A RALVT, Rede de Arrojamentos de Lisboa e Vale do Tejo, entrou em funções em 2021 e integra a Rede Nacional de Arrojamentos, atuando entre a região de Lisboa e Vale do Tejo, entre os municípios da Lourinhã e Setúbal. É o resultado de uma parceria entre o Fundo Ambiental o ICNF (Instituto da Conservação da Natureza e das Florestas) e o MARE - ISPA (Instituto Superior de Psicologia Aplicada). O nosso principal objetivo é dar resposta a alertas de arrojamentos mortos ou vivos de cetáceos e tartarugas marinhas que aconteçam na nossa área de atuação.',
			text2:
				'Além da RALVT, existem mais 3 redes de arrojamentos regionais: Rede do Norte (Caminha a Peniche), ARROJAL (Tróia a Odeceixe) e RAAlg (Odeceixe a Vila Real de Santo António), sendo que todas integram a Rede Nacional de Arrojamentos, coordenada pelo ICNF.'
		},
		mission: {
			title: 'A nossa missão',
			text1:
				'Com o objetivo de ajudar em arrojamentos de animais marinhos, a nossa missão é contribuir para a Literacia dos Oceanos, dando a conhecer mais sobre estes animais e sobre a conservação dos Oceanos e das várias espécies que nele habitam.',
			text2:
				'A recolha de informação em qualquer tipo de arrojamento é essencial para tentar compreender mais sobre a biologia destas espécies e sobre os fenómenos que as podem estar a afetar.',
			bulletPoints: {
				necropsies: {
					title: 'Necrópsias e assistência a arrojamentos vivos.',
					text: 'A equipa multifacetada e disponível 24h/7 permite à RALVT responder em situações que os animais arrojem vivos na praia. No caso de arrojamentos mortos agilizamos com as autoridades competentes o processo desde o alerta até ao destino final do animal. Procedemos à necropsia e colheita de amostras biológicas, na tentativa de determinar uma possível causa de morte. Esta mesma equipa, permite também dar resposta a arrojamentos vivos, auxiliando no resgate e eventual encaminhamento para um centro de reabilitação.'
				},
				monitorings: {
					title: 'Monitorizações.',
					text: 'Realizamos monitorizações regulares às praias da área de atuação, de modo a permitir uma recolha de informação sistemática, podendo detetar arrojamentos sem alerta. Além disso, conseguimos ter um melhor conhecimento das morfologias das praias ao longo do ano e planear formas de acesso às praias com difíceis acessos caso seja necessário agir rapidamente.'
				},
				education: {
					title: 'Educação ambiental.',
					text: 'Queremos promover a Literacia do Oceano através de atividades de ciência cidadã, como formações e webinars para organizações locais que nos queiram ajudar. Além disso, contamos ainda com programas de voluntariado e de estágios curriculares de forma a transmitir o conhecimento a todos os estudantes interessados e que pretendam seguir esta área.'
				}
			},
			highlights: {
				necropsies: {
					number: '+60 necrópsias',
					text: 'Desde 2022'
				},
				trash: {
					number: '+400 kg',
					text: 'De lixo apanhado em 2023'
				},
				education: {
					number: '+30 pessoas',
					text: 'Alcançadas em ações de educação ambiental'
				}
			}
		},
		team: {
			title: 'A nossa equipa',
			text: 'A RALVT é formada por uma equipa multifacetada constituída por biólogos marinhos e médicos veterinários, permitindo uma maior amplitude de áreas de atuação. Somos um grupo de pessoas com uma enorme paixão pelos oceanos e pela sua biodiversidade e a inclusão destas duas profissões permite uma melhor resposta em qualquer situação de arrojamento vivo ou morto e um conhecimento amplo sobre as espécies, quer a nível biológico quer a nível veterinário.',
			roles: {
				VeterinarianMale: 'Médico Veterinário',
				VeterinarianFemale: 'Médica Veterinária',
				marineBiologistFemale: 'Bióloga Marinha',
				coordinator: 'Coordenador',
				operations: 'Operações',
				administrative: 'Administrativo',
				outreach: 'Divulgação'
			}
		}
	},
	species: {
		cetaceans: {
			title: 'Cetáceos',
			description:
				'Em Portugal continental, existem 28 espécies de mamíferos marinhos, no entanto globalmente existem pelo menos 90 espécies conhecidas. Estes animais são também denominados de cetáceos e pertencem à ordem Cetartiodáctilos. São um grupo extremamente diversificado, que possuem dialetos e estruturas hierárquicas, alimentação e rotinas diferentes. Os cetáceos são divididos em dois grupos, os odontocetes ou baleias com dentes e os misticetos ou baleias de barbas. Estes animais têm uma representatividade ecológica muito significativa, sendo bastante impactados por várias atividades antropogénicas como por exemplo: a poluição, a pesca acidental, tráfego marítimo e por atividades que interrompam os eventos de alimentação e reprodução.',
			commonDolphin: {
				regularName: 'Golfinho Comum',
				conservationState: 'Pouco Preocupante',
				description:
					'O golfinho-comum é uma espécie que pode ser encontrada em todos os oceanos do mundo. Em adultos podem atingir os 2,7 m e pesar até 200 kg, enquanto as crias pesam à volta dos 10kg e têm apenas 85 cm. Geralmente, são encontrados em grupo até centenas de indivíduos. Considerados animais muito ágeis e que desenvolvem comportamentos aéreos, interagem com as embarcações num comportamento denominado de “bow riding”. A sua alimentação é à base de peixe e cefalópodes (lulas e polvos). A sua longevidade média é de 35 anos.'
			},
			stripedDolphin: {
				regularName: 'Golfinho-riscado',
				conservationState: 'Pouco Preocupante',
				description:
					'O golfinho-riscado pode ser encontrado em águas tropicais e temperadas. Os adultos podem ter até 2,5 m e pesar até 160 kg. Geralmente, podem ser vistos em grupos de aproximadamente 20 a 50 indivíduos. Estes animais apresentam comportamentos aéreos, mas sempre com precaução quando se aproximam dos barcos. Alimentam-se maioritariamente de peixe e cefalópodes (lulas e polvos). A sua longevidade média é de 30 anos.'
			},
			bottlenoseDolphin: {
				regularName: 'Roaz',
				conservationState: 'Pouco Preocupante',
				description:
					'O golfinho-roaz, podem ser encontrados mundialmente, sendo que em Portugal existe a população residente do estuário do Sado que conta com 31 indivíduos. Os adultos podem ter até 3,9 m e pesar até 635 kg. Esta espécie pode ser avistada em grupos sociais mais pequenos, entre 2 a 15 indivíduos, mas também em grupos maiores. Alimentam-se de peixes e cefalópodes. A sua longevidade média é de 52 anos.'
			},
			minkeWhale: {
				regularName: 'Baleia-anã',
				conservationState: 'Pouco Preocupante',
				description:
					'A baleia anã é uma espécie migratória e que está presente em vários oceanos do planeta. Os adultos podem ter até 9,8 m e pesar até 10 toneladas. É uma espécie solitária mas também pode ser encontrada em pequenos grupos. Alimentam-se de krill, crustáceos e peixe. A sua longevidade média é de 50 anos. São animais tímidos e que se afastam dos barcos.'
			},
			spermWhale: {
				regularName: 'Cachalote',
				conservationState: 'Vulnerável',
				description:
					'O cachalote é o maior cetáceo com dentes, tendo apenas um espiráculo e este localiza-se na parte frontal da cabeça e desviado ligeiramente para a esquerda. Estes animais possuem um crânio grande quando comparado com o resto do corpo e com uma forma quadrada. Os adultos podem ter até 20 m e pesar até 57 toneladas. Alimentam-se de lulas, crustáceos e peixe. A sua longevidade média é de 60 anos. Podem mergulhar até 600 m e estes mergulhos podem durar 45 minutos.'
			}
		},
		turtles: {
			title: 'Tartarugas',
			description:
				'Em todo o mundo existem mais de 300 espécies de tartarugas mas apenas 7 são marinhas, sendo que em Portugal temos presentes 5 dessas espécies. Tendo as tartarugas marinhas evoluído de animais terrestes, ainda possuem características dos mesmos, tal como a respiração através do ar e a necessidade de incubarem os ovos em ninhos escavados nas praias, sendo que as fêmeas regressam à praia onde nasceram para colocar os seus ovos. Das 5 espécies em Portugal, as mais comuns de observar em águas continentais são: tartaruga-de-couro e a tartaruga-comum.',
			leatherbackTurtle: {
				regularName: 'Tartaruga-de-couro',
				conservationState: 'Vulnerável',
				description:
					'A tartaruga-de-couro é a maior espécie de tartarugas do planeta. Não possuem placas córneas, nem uma carapaça dura. Apresentam comportamentos migratórios e mergulham a grandes profundidades. Passam a maior parte da sua vida no oceano, e apenas as fêmeas se dirigem às praias para poderem deixar os ovos no ninho. Os adultos podem medir até 2,5 m e pesar até 500 kg. É uma espécie solitária. A sua alimentação é maioritariamente composta por alforrecas e moluscos. A sua longevidade média é de 50 anos.'
			},
			greenTurtle: {
				regularName: 'Tartaruga-verde',
				conservationState: 'Em Perigo',
				description:
					'Esta espécie possui uma distribuição circumglobal, e apresenta comportamentos migratórios. Podem atingir até 1,5m e podem pesar até 200 kg. São tartarugas solitárias. São herbívoras e a sua longevidade média é de 80 anos. O seu bico serrilhado é adaptado ao consumo de plantas e algas. A sua gordura interna é verde.'
			},
			commonTurtle: {
				regularName: 'Tartaruga-comum',
				conservationState: 'Vulnerável',
				description:
					'Distribuída globalmente, estas tartarugas podem medir até 2,13m e pode pesar até 140 kg. A sua longevidade média é de 70 anos. é uma espécie solitária e omnívora, alimentando-se de diversos animais. Estas tartarugas, geralmente, possuem muitos organismos na sua carapaça, como lapas e caranguejos, algas e outros invertebrados (epibiontes).'
			}
		},
		birds: {
			title: 'Aves',
			description:
				'Em Portugal continental, podemos encontrar vários grupos taxonómicos, existindo 65 espécies de aves marinhas.',
			yellowLeggedGull: {
				regularName: 'Gaivota-de-patas-amarelas',
				conservationState: 'Pouco Preocupante',
				description:
					'Espécie residente em Portugal possuindo uma envergadura de até 140 cm. Podem pesar entre 620-1100g e alimentam-se de peixe, invertebrados, répteis, pequenos mamíferos e lixo.  Em Portugal, podemos observar esta espécie todo o ano, mais perto da orla costeira, incluindo áreas naturais e zonas urbanas. Pode viver até 20 anos.'
			},
			greatCormorant: {
				regularName: 'Corvo-marinho',
				conservationState: 'Pouco Preocupante',
				description:
					'Espécie invernante e residente em Portugal continental, sendo mais comum entre setembro e abril. A sua dieta é maioritariamente composta por peixe. Pode medir de envergadura 110cm e pesar até 2500g. Podem estar mais de 1m debaixo de água, sendo que não possuem penas impermeáveis após os mergulhos, tendo a necessidade de se secar.'
			},
			razorbill: {
				regularName: 'Torda-mergulheira',
				conservationState: 'Pouco Preocupante',
				description:
					'Espécie pequena e que se pode observar em Portugal entre novembro a março ao longo da costa. Ave que é mais encontrada arrojada morta nas praias. Pode ter uma envergadura de 67cm e pode pesar entre 590-730g. Alimentam-se maioritariamente de pequenos peixes e krill. A sua longevidade média é de 20 anos, mas podem até aos 40 anos. Têm a capacidade de mergulhar até os 120 metros de profundidade, o equivalente a um prédio de 10 andares.'
			},
			atlanticPuffin: {
				regularName: 'Papagaio-do-mar',
				conservationState: 'Vulnerável',
				description:
					'Pode ser apenas encontrado no atlântico norte e em Portugal continental é uma espécie invernante e migrador de passagem. Pode ser visto entre outubro e abril ao longo da costa. Esta espécie passa a maior parte da sua vida em alto-mar. Alimenta-se maioritariamente de peixe, mas pouco se sobre a sua dieta.'
			}
		},
		names: {
			dolphin: 'Golfinho',
			whale: 'Baleia',
			turtle: 'Tartaruga',
			bird: 'Pássaro',
			animal: 'Animal'
		}
	},
	strandings: {
		hero: {
			title: 'Arrojamentos',
			text1: 'Qual a proporção de arrojamentos vivos vs mortos?',
			text2:
				'Entre Janeiro e Outubro de 2022 a RALVT registou 7% de arrojamentos vivos para 93% de arrojamentos mortos.',
			callToAction: {
				reportStranding: 'Reportar um arrojamento',
				knowMore: 'Saber mais'
			},
			map: {
				specie: 'Espécie',
				reportedOn: 'Reportado a',
				helpText:
					'O mapa acima mostra os arrojamentos que nos foram reportados. Clique num marcador para ver os detalhes!'
			}
		},
		whatIs: {
			title: 'O que é um arrojamento?',
			text: 'É denominado de arrojamento quando um animal marinho, vivo ou morto, encalha na costa e não consegue regressar à água sem qualquer auxílio. Os animais mais comuns de arrojar são os cetáceos (baleias e golfinhos), as tartarugas marinhas e as aves marinhas. Este fenómeno tem vindo a ser cada vez mais comum em Portugal, mas também em outros lugares do mundo, como em França, Escócia e Irlanda. Contudo, temos de ter em conta que a quantidade de entidades a registar este tipo de fenómenos é cada vez maior, assim como cada vez mais pessoas estão consciencializadas para dar alertas destes acontecimentos.',
			aliveStranding: {
				title: 'Arrojamento vivo',
				text: 'Os arrojamentos vivos são situações muito complexas, em que cada situação vai ser diferente. Por norma, os animais que arrojam vivos nas praias já não se encontram nas melhores condições de saúde e, por isso mesmo, o desfeche de um arrojamento vivo nem sempre é a sobrevivência do animal e a sua devolução ao oceano. O objetivo será sempre avaliar o estado de saúde do animal, e tomar uma decisão sobre qual será a melhor opção para reduzir o sofrimento do animal e como é que podemos evitar induzir mais stress.'
			},
			deadStranding: {
				title: 'Arrojamento morto',
				text: 'Um arrojamento de um animal morto vai ser sempre um dado importante, porque a quantidade real de animais a morrer é muito superior à quantidade daqueles que arrojam nas praias. No entanto, a quantidade de dados a retirar em cada arrojamento vai depender do estado de decomposição do animal que arrojou. Alguns dos dados que podem ser obtidos nesta situação.'
			}
		}
	},
	events: {
		title: 'Eventos',
		futureEvents: 'Próximos eventos',
		pastEvents: 'Eventos passados',
		details: 'Detalhes',
		noFutureEvents: 'Não há eventos de momento. Verifica mais tarde!',
		noPastEvents: 'Ainda não fizemos nenhum evento. Verifica mais tarde!'
	},
	howToHelp: {
		hero: {
			title:
				'Somos uma equipa dedicada e inclusiva, que tem como objetivo a conservação dos oceanos.',
			text: 'Para que seja possível realizar o nosso trabalho, precisamos de ajuda da comunidade e das pessoas que nos rodeiam. Deste modo, tentamos envolver a comunidade nas nossas atividades e damos a oportunidade de te juntares a nós nesta caminhada para a proteção dos cetáceos e tartarugas da nossa costa.'
		},
		actions: {
			title: 'Estamos sempre à procura de pessoas incríveis como tu para nos ajudar',
			text: 'Apoiando-nos estás a contribuir para a conservação dos cetáceos e tartarugas marinhas da costa portuguesa. Por isso, junta-te a nós através de:',
			volunteering: {
				title: 'Voluntariado e estágios',
				text: 'Programa de voluntariado e estágios, que permite a pessoas de todo o mundo integrarem a nossa equipa e se juntarem na preservação dos oceanos. Tens também a oportunidade de fazeres o teu relatório ou tese connosco.',
				buttonText: 'Inscrever como voluntário'
			},
			beachCleaning: {
				title: 'Limpezas de praia, webinars e outras ações',
				text: 'Consulta a nossa página de eventos para saber mais.',
				buttonText: 'Ver o nosso calendário'
			},
			report: {
				title: 'Reportar, Reportar, Reportar',
				text: 'Contacta-nos o mais rápido possível sempre que vires um animal arrojado , para nos ajudar na recolha de dados sistemática. Para além disto, se vires algum animal vivo perto da costa podes também dizer-nos e ajudar-nos a monitorizar estes animais.',
				buttonText: 'Reportar um arrojamento'
			}
		}
	},
	contacts: {
		title: 'Fale connosco',
		subtitle: 'Contactos úteis em caso de emergência.',
		lisbonAndTagusValley: {
			title: 'Lisboa e Vale do Tejo',
			maritimePolicePeniche: 'Polícia Marítima Porto de Peniche/Lourinhã/Torres Vedras',
			civilProtection: 'Proteção Civil Sesimbra',
			maritimePolcieSesimbra: 'Polícia Marítima Sesimbra',
			capitancyCascais:
				'Capitania do Porto de Cascais (Desde a ponta da Foz (rio Sisandro) até à Torre de S. Julião da Barra)',
			maritimePoliceAlmada: 'Policia Maritima de Almada',
			maritimeDelegationEriceira: 'Delegação Marítima da Ericeira',
			localCommandLisbon: 'Comando Local de Lisboa'
		},
		otherStrandingNetworks: {
			title: 'Outras redes de arrojamento',
			arrojal: 'ARROJAL - Apoio à Rede Nacional de Arrojamentos - Rede Regional Alentejo',
			abrigos: 'ABRIGOS - Rede de Apoio a Mamíferos marinhos / ICNF',
			raalg: 'Rede de Arrojamentos do Algarve (RAAlg)'
		},
		recoveryCenters: {
			title: 'Centros de Recuperação',
			crassa: 'CRASSA - Centro de Recuperação de Animais Selvagens de Santo André',
			zoomarine: "Porto d'Abrigo do Zoomarine (Albufeira)",
			lxcras: 'LxCRAS- Centro de Recuperação de Animais Silvestres de Lisboa',
			ecomare: 'ECOMARE - Centro de Reabilitação de Animais Marinhos (CRAM)'
		}
	},
	floating: {
		title: 'Encontrou um animal arrojado?',
		text: 'Dê-nos o alerta através do nosso formulário'
	},
	form: {
		stranding: {
			text: 'Reportar arrojamento',
			description:
				'Encontrou um animal arrojado? Reporte-nos e nós iremos averiguar a situação. Se não sabe, ou não tem a certeza de o que é um arrojamento, veja a',
			link: 'nossa página sobre arrojamentos'
		},
		sighting: {
			text: 'Reportar avistamento',
			description: ''
		},
		fields: {
			name: 'O seu nome',
			phone: 'Número de telefone',
			beachName: 'Nome da praia',
			beachNameHelpText: 'e.x. Praia de Carcavelos',
			description: 'Descrição da situação',
			location: 'Localização',
			locationHelpText: 'Clique no mapa para selecionar o ponto',
			dateOfStranding: 'Data em que detetou o arrojamento',
			dateOfSighting: 'Data em que avistou o animal',
			species: 'Espécie',
			animalCondition: 'Condição do animal',
			photos: 'Fotografias',
			photosStrandingHelpText: 'Opcionalmente adicione fotografias do arrojamento',
			photosSightingHelpText: 'Opcionalmente adicione fotografias do avistamento',
			dropzone: {
				photosText: '{0} fotografia{{s}} selecionada{{s}}',
				uploadText1: 'Faça upload de um uma ou mais fotografias',
				uploadText2: 'ou large aqui',
				uploadText3: 'PNG, JPG, GIF até 5MB, máximo de {maxFiles} ficheiros'
			},
			receiveUpdates: 'Receber atualizações',
			receiveUpdatesHelpText: 'Opcionalmente receba atualizações do desenvolvimento do arrojamento',
			email: 'Endereço de email',
			privacyPolicyConsentText: 'Declaro que li e aceito os termos descritos na',
			privacyPolicyConsentLink: 'política de privacidade',
			animalConditions: {
				alive: 'Vivo',
				fresh: 'Fresco',
				decomposing: 'Em decomposição',
				mummified: 'Mumificado'
			}
		},
		buttons: {
			reportStranding: 'Reportar arrojamento',
			reportSighting: 'Reportar avistamento'
		},
		messages: {
			sending: 'A enviar',
			formSuccessTitle: 'Formulário submetido',
			formErrorTitle: 'Erro ao submeter formulário',
			formSuccessBody: 'Obrigado por submeter o formulário',
			formErrorBody:
				'Erro interno ao submeter formulário. Se o erro persistir, por favor contacte-nos por telefone: (+351) 911 111 241.'
		}
	}
} satisfies Translation;

export default pt;
