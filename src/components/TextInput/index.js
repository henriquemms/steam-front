import React from 'react'

import { Form } from 'react-bootstrap'
import { Campo } from './css'

function TextInput (props) {
  return (
    <Campo>
      <Form.Group >
        <Form.Label className='labelSteam'> {props.label}</Form.Label>
        <Form.Control className='inputSteam'
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <Form.Text>{props.text}</Form.Text>
      </Form.Group>
    </Campo>
  )
}

export default TextInput
