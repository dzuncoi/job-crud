import React from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Popconfirm, Button } from 'antd';

export default class JobListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record) => (
        <div>
          <Popconfirm title="Sure to delete?" onConfirm={() => this.props.onRemoveJob(record)}>
            <Button type="danger">Remove</Button>
          </Popconfirm>
        </div>
      )
    }];
  }
  
  render() {
    return (
      <div>
        <Table
          bordered
          pagination={false}
          dataSource={this.props.data}
          columns={this.columns}/>
      </div>
    )
  }
}

JobListComponent.propTypes = {
  data: PropTypes.array.isRequired,
  onRemoveJob: PropTypes.func,
}

JobListComponent.defaultProps = {
  data: [],
  onRemoveJob: () => {}
}
