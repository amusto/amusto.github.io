import React, { Component } from 'react'
import { connect } from 'react-redux'
import DashboardChart from '../components/DashboardChart.js'
import ExampleCharts from '../components/ExampleCharts.js'
import ChartContainer from "../components/ChartContainer";

class Dashboard extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <h2>Dashboard</h2>
                <div style={{float: 'left', width: '100%'}}>
                    <ExampleCharts data={[5,10,1,3]} size={[500,500]} />
                    {/*<div style={{float: 'left'}}>*/}
                        {/*<ExampleCharts data={[5,10,1,3]} size={[500,500]} />*/}
                    {/*</div>*/}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
