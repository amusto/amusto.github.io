import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChartContainer from '../components/ChartContainer.js'
import BarChart from '../components/BarChart.js'
import BarChartHorizontal from '../components/BarChartHorizontal.js'

import '../css/style.css'
import styled from 'styled-components';

const PageContainer = styled.div`
	float: left;
  	width: 100%;
`;

class Reports extends Component {
	componentDidMount () {
		console.log(this.props)
	}

	handleCloseReport(reportId) {
		console.log('Close report: ', reportId)
	}

	reportByType(type) {
		switch(type) {
			case 'barChart':
				return <BarChart data={[5,10,1,3]} size={[500,500]} />
			case 'barChartHorizontal':
				return <BarChartHorizontal />
			default:
				return <BarChart data={[5,10,1,3]} size={[500,500]} />
		}
	}

	renderReports() {
		return (
			this.props.reports.filter((report) => report.active).map(function(report, i) {
				console.log(report)
				return (
					<ChartContainer key={i} handleClose={this.handleCloseReport} reportData={report}>
						{this.reportByType(report.type)}
					</ChartContainer>
				)
			}, this)
		)
	}

	renderBarChart() {
		return (
			<div className="chart-container">
				<BarChart data={[5,10,1,3]} size={[500,500]} />
			</div>
		)
	}

	render () {
		return (
			<div className="content-inside">
     		   <h2>Reports</h2>
				<PageContainer>
					{this.renderReports()}
				</PageContainer>
			</div>
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
    //searchInventory: arg => dispatch(searchInventory(arg))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
