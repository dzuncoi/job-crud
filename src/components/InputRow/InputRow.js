import React from 'react'
import { Input } from 'antd'

const InputRow = (props) => {
  const { label, placeholder, onChange, value } = props
  return (
    <div className="inputRow">
      <h3>{label}</h3>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default InputRow
