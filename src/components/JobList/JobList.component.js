import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Input, Row, Col } from 'antd';

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
          <Button onClick={() => this.props.onSelectJob(record)}>Edit</Button>
          <Popconfirm title="Sure to delete?" onConfirm={() => this.props.onRemoveJob(record)}>
            <Button type="danger">Remove</Button>
          </Popconfirm>
        </div>
      )
    }];
  }
  
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <Input.Search placeholder="Search your job" onChange={(e) => {
              this.props.onSearchJob(e.target.value)
            }} />
          </Col>
          <Col className="gutter-row" span={6}>
            <Button onClick={this.props.onCreateJob}>Create new job</Button>
          </Col>
        </Row>
        <Table
          bordered
          pagination={false}
          rowKey={record => record.id}
          dataSource={this.props.data.filter(d => d.isShow)}
          columns={this.columns}/>
      </div>
    )
  }
}

JobListComponent.propTypes = {
  data: PropTypes.array.isRequired,
  onRemoveJob: PropTypes.func,
  onSelectJob: PropTypes.func,
  onCreateJob: PropTypes.func,
  onSearchJob: PropTypes.func,
}

JobListComponent.defaultProps = {
  data: [],
  onRemoveJob: () => {},
  onSelectJob: () => {},
  onCreateJob: () => {},
}
