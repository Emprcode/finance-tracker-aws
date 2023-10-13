import React from 'react'
import { Form } from 'react-bootstrap'
import { FormFieldProps } from '../../lib/types'

export const FormComponents = (props: FormFieldProps) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} onChange={props.onChange} name={props.name} />
    </Form.Group>
  )
}
