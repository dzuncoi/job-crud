import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import JobListComponent from '../../components/JobList/JobList.component'
import { removeJob, filterJob } from '../../redux/jobs/jobs.action'

class JobList extends Component {
  handleRemoveJob = (job) => {
    this.props.actions.removeJob(job)
  }

  handleSelectJob = (job) => {
    this.props.history.push(`/job/${job.id}`)
  }

  handleCreateJob = () => {
    this.props.history.push('/job/new')
  }

  handleSearchJob = (text) => {
    this.props.actions.filterJob(text)
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Jobs List</h2>
        <JobListComponent
          data={this.props.jobs.jobLists}
          onRemoveJob={this.handleRemoveJob}
          onSelectJob={this.handleSelectJob}
          onCreateJob={this.handleCreateJob}
          onSearchJob={this.handleSearchJob}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobList))
