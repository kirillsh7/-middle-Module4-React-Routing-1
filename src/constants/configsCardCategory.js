export const configs = {
	character: {
		title: 'Characters',
		itemName: 'character',
		color: '#00b894',
		fields: [
			{ key: 'name', label: 'Name', width: '30%' },
			{ key: 'species', label: 'Species', width: '20%' },
			{ key: 'status', label: 'Status', width: '15%', badge: true },
			{ key: 'gender', label: 'Gender', width: '15%' },
			{ key: 'created', label: 'Created', width: '20%', type: 'date' }
		],
		gridView: {
			imageKey: 'image',
			titleKey: 'name',
			subtitleKey: 'species',
			badgeKey: 'status'
		}
	},
	episode: {
		title: 'Episodes',
		itemName: 'episode',
		color: '#8e44ad',
		fields: [
			{ key: 'name', label: 'Name', width: '40%' },
			{ key: 'episode', label: 'Episode', width: '20%' },
			{ key: 'air_date', label: 'Air Date', width: '20%' },
			{ key: 'created', label: 'Created', width: '20%', type: 'date' }
		],
		gridView: {
			imageKey: null,
			titleKey: 'name',
			subtitleKey: 'episode',
			badgeKey: null
		}
	},
	location: {
		title: 'Locations',
		itemName: 'location',
		color: '#3498db',
		fields: [
			{ key: 'name', label: 'Name', width: '30%' },
			{ key: 'type', label: 'Type', width: '25%' },
			{ key: 'dimension', label: 'Dimension', width: '30%' },
			{ key: 'created', label: 'Created', width: '15%', type: 'date' }
		],
		gridView: {
			imageKey: null,
			titleKey: 'name',
			subtitleKey: 'type',
			badgeKey: 'dimension'
		}
	}
}