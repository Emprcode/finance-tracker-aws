import { Form } from 'react-bootstrap'
import React from 'react'
import { FormFieldProps } from '../../lib/types'

export const FormComponents = (props: FormFieldProps) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} />
    </Form.Group>
  )
}
