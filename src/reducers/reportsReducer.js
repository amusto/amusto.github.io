let newState

const INITIAL_STATE = [
		{
			name: 'Simple Bar Chart',
			type: 'barChart',
			active: true
		},
		{
			name: 'Horizontal Bar Chart',
			type: 'barChartHorizontal',
			active: false
		}
		// ,
		// {
		// 	name: 'Simple Bar Chart',
		// 	reportType: 'WorldMap',
		// 	active: true
		// }
	]

export const reports = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case 'SEARCH_REPORTS':
		newState = Object.assign({}, {
			count: action.payload.length,
			all: action.payload
		})
		return newState
	case 'SELECT_REPORT':
		newState = Object.assign({}, {
			count: action.payload.length,
			all: action.payload
		})
		return newState
	default:
		return state
	}
}

export default reports
