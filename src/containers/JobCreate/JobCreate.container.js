import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import JobCreateComponent from '../../components/JobCreate/JobCreate.component'
import { selectJob, addNewJob, updateJob } from '../../redux/jobs/jobs.action'

class JobCreate extends Component {
  componentDidMount() {
    if (this.isCreateNew() !== 'new') {
      const { id } = this.props.match.params
      this.props.actions.selectJob(id)
    }
  }

  isCreateNew = () => this.props.match.params.id === 'new'

  onSaveJob = (job) => {
    if (this.isCreateNew()) {
      const newJob = { ...job, id: Date.now() }
      this.props.actions.addNewJob(newJob)
    } else {
      this.props.actions.updateJob(job)
    }
  }

  render() {
    const isCreateNew = this.isCreateNew()
    return (
      <div>
        <h2 className="text-center">{ this.isCreateNew() ? 'Create New Job' : 'Update your job' }</h2>
        <JobCreateComponent
          job={this.props.job}
          isCreateNew={isCreateNew}
          onSaveJob={this.onSaveJob}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  job: state.jobs.currentJob
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectJob,
    addNewJob,
    updateJob,
  }, dispatch)
})

JobCreate.propTypes = {
  job: PropTypes.object,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobCreate))
