import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import JobListComponent from '../../components/JobList/JobList.component'
import { removeJob, filterJob } from '../../redux/jobs/jobs.action'

class JobList extends Component {
  handleRemoveJob = (job) => {
    this.props.actions.removeJob(job)
  }

  render() {
    return (
      <div>
        <h2>JobList</h2>
        <JobListComponent
          data={this.props.jobs.jobLists}
          onRemoveJob={this.handleRemoveJob}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ jobs: state.jobs })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeJob,
    filterJob,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobList)
