import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../components/MyLayout.js'
import homepage from './Homepage.js'
import dashboard from './Dashboard.js'
import reports from './Reports.js'

import { connect } from 'react-redux'
import { searchReports } from '../actions'

class App extends Component {
	componentDidMount () {
	}

	render () {
		return (
			<BrowserRouter>
					<Layout>
							<Route exact path="/" component={homepage} />
							<Route exact path="/dashboard" component={dashboard} />
							<Route exact path="/reports" component={reports} />
					</Layout>
			</BrowserRouter>
		)
	}
}

  const mapStateToProps = (state, ownProps) => {
  return {
		reports: state.reports
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    searchReports: arg => dispatch(searchReports(arg))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
