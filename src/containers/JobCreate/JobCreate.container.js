import React, { Component } from 'react'
import { connect } from 'react-redux'

class JobList extends Component {
  render() {
    return (
      <p>JobCreate</p>
    )
  }
}

const mapStateToProps = state => state.jobs

export default connect(mapStateToProps)(JobList)
