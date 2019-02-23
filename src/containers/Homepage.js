import React, { Component } from 'react'
import { connect } from 'react-redux'

class Homepage extends Component {
	componentDidMount () {
	}

	render () {
		return (
			<div>
        <h2>Homepage</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
