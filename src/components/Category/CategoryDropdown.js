import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon } from 'antd'

const CATEGORY = [{
  id: '0',
  value: 'Computer Science',
}, {
  id: '1',
  value: 'Business Analyst',
}, {
  id: '2',
  value: 'Graphic Designer',
}, {
  id: '3',
  value: 'UI/UX Designer',
}, {
  id: '4',
  value: 'Programmer',
}, {
  id: '5',
  value: 'Office Executive',
}]

export default class CategoryDropdown extends Component {
  onClickItem = ({ key }) => this.props.onClickItem(CATEGORY[key])

  render() {
    const menu = (
      <Menu onClick={this.onClickItem}>
        { CATEGORY.map(category => (
          <Menu.Item key={category.id}>{category.value}</Menu.Item>
        ))}
      </Menu>
    )
    return (
      <Dropdown overlay={menu}>
        <p>
          <span style={{ paddingRight: 5 }}>{this.props.title || 'Choose your category'}</span>
          <Icon type="down" />
        </p>
      </Dropdown>
    )
  }
}

CategoryDropdown.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  title: PropTypes.string,
}

CategoryDropdown.defaultProps = {
  onClickItem: () => {},
}
