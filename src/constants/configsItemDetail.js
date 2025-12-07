// export const detailConfigs = {
// 	character: (item) => ({
// 		title: item.name,
// 		image: item.image,
// 		accentColor: '#00b894',
// 		fields: [
// 			{ label: 'Status', value: item.status, type: 'badge' },
// 			{ label: 'Species', value: item.species },
// 			{ label: 'Gender', value: item.gender },
// 			{ label: 'Type', value: item.type || 'Unknown' },
// 			{ label: 'Created', value: new Date(item.created).toLocaleDateString() }
// 		],
// 		additionalInfo: [
// 			{ label: 'Full Name', value: item.name },
// 			{ label: 'Current Status', value: item.status, highlight: true },
// 			{ label: 'Origin', value: 'Earth (C-137)' },
// 			{ label: 'Last Location', value: 'Citadel of Ricks' }
// 		]
// 	}),
// 	episode: (item) => ({
// 		title: item.name,
// 		image: null,
// 		accentColor: '#8e44ad',
// 		fields: [
// 			{ label: 'Episode', value: item.episode },
// 			{ label: 'Air Date', value: item.air_date },
// 			{ label: 'Season', value: item.episode?.split('E')[0] || 'Unknown' },
// 			{ label: 'Created', value: new Date(item.created).toLocaleDateString() }
// 		],
// 		additionalInfo: [
// 			{ label: 'Episode Code', value: item.episode },
// 			{ label: 'Air Date', value: item.air_date, highlight: true },
// 			{ label: 'Characters', value: '20 characters' },
// 			{ label: 'Duration', value: '22 min' }
// 		]
// 	}),
// 	location: (item) => ({
// 		title: item.name,
// 		image: null,
// 		accentColor: '#3498db',
// 		fields: [
// 			{ label: 'Type', value: item.type },
// 			{ label: 'Dimension', value: item.dimension },
// 			{ label: 'Residents', value: '15 residents' },
// 			{ label: 'Created', value: new Date(item.created).toLocaleDateString() }
// 		],
// 		additionalInfo: [
// 			{ label: 'Location Type', value: item.type },
// 			{ label: 'Dimension', value: item.dimension, highlight: true },
// 			{ label: 'Notable Residents', value: 'Rick Sanchez, Morty Smith' },
// 			{ label: 'Planet Class', value: 'Class M' }
// 		]
// 	})
// }

export const detailConfigs = {
	character: (item) => ({
		title: item.name,
		image: item.image,
		accentColor: '#00b894',
		fields: [
			{ label: 'Status', value: item.status, type: 'badge' },
			{ label: 'Species', value: item.species },
			{ label: 'Gender', value: item.gender },
			{ label: 'Type', value: item.type || 'Unknown' },
			{ label: 'Created', value: new Date(item.created).toLocaleDateString() }
		],
		additionalInfo: [
			{ label: 'Full Name', value: item.name },
			{ label: 'Current Status', value: item.status, highlight: true },
			{ label: 'Origin', value: item.origin?.name || 'Unknown' },
			{ label: 'Last Location', value: item.location?.name || 'Unknown' }
		]
	}),
	episode: (item) => ({
		title: item.name,
		image: null,
		accentColor: '#8e44ad',
		fields: [
			{ label: 'Episode', value: item.episode },
			{ label: 'Air Date', value: item.air_date },
			{ label: 'Season', value: item.episode?.split('E')[0]?.replace('S', '') || 'Unknown' },
			{ label: 'Created', value: new Date(item.created).toLocaleDateString() },
			{ label: 'Characters', value: `${item.characters?.length || 0} characters` }
		],
		additionalInfo: [
			{ label: 'Episode Code', value: item.episode },
			{ label: 'Air Date', value: item.air_date, highlight: true },
			{ label: 'Characters Count', value: `${item.characters?.length || 0} characters` },
			{ label: 'Duration', value: '22 min' }
		]
	}),
	location: (item) => ({
		title: item.name,
		image: null,
		accentColor: '#3498db',
		fields: [
			{ label: 'Type', value: item.type },
			{ label: 'Dimension', value: item.dimension },
			{ label: 'Residents', value: `${item.residents?.length || 0} residents` },
			{ label: 'Created', value: new Date(item.created).toLocaleDateString() }
		],
		additionalInfo: [
			{ label: 'Location Type', value: item.type },
			{ label: 'Dimension', value: item.dimension, highlight: true },
			{ label: 'Residents Count', value: `${item.residents?.length || 0} residents` },
			{ label: 'Planet Class', value: 'Class M' }
		]
	})
}