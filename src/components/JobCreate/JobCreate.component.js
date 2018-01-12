import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import InputRow from '../InputRow/InputRow'
import CategoryDropdown from '../Category/CategoryDropdown'

export default class JobCreateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: {
        title: null,
        description: null,
      },
      category: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.job) {
      this.setState({
        inputValue: {
          title: nextProps.job.title,
          description: nextProps.job.description,
        },
        category: nextProps.job.category,
      })
    }
  }

  handleInputChange = (text, key) => {
    this.setState({
      inputValue: {
        ...this.state.inputValue,
        [key]: text,
      }
    })
  }

  handleCategoryChange = (category) => {
    this.setState({
      category: category.value,
    })
  }

  handleSaveJob = () => {
    const newJobValue = {
      title: this.state.inputValue.title,
      description: this.state.inputValue.description,
      category: this.state.category,
    }
    this.props.onSaveJob({
      ...this.props.job,
      ...newJobValue,
    })
  }

  render() {
    return (
      <div style={{ padding: 40 }}>
        <InputRow
          label="Title"
          placeholder="Job title"
          value={this.state.inputValue.title}
          onChange={e => this.handleInputChange(e.target.value, 'title')}
        />
        <InputRow
          label="Description"
          placeholder="Job Description"
          value={this.state.inputValue.description}
          onChange={e => this.handleInputChange(e.target.value, 'description')}
        />
        <div>
          <h3>Category</h3>
          <CategoryDropdown title={this.state.category} onClickItem={this.handleCategoryChange} />
        </div>
        <div>
          <Button type="primary" onClick={this.handleSaveJob}>
            {this.props.isCreateNew ? 'Save' : 'Update'}
          </Button>
        </div>
      </div>
    )
  }
}

JobCreateComponent.propTypes = {
  job: PropTypes.object,
  isCreateNew: PropTypes.bool,
  onSaveJob: PropTypes.func,
}
