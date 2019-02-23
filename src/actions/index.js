// import { hashHistory } from 'react-router'
// import axios from 'axios'
import {
	SEARCH_REPORTS,
	SELECT_REPORT
} from './types'

export const getReport = (reportId) => (
	{
		type: SELECT_REPORT,
		id: reportId
	})

export const searchReports = payload => {
	return { type: SEARCH_REPORTS, payload }
}

