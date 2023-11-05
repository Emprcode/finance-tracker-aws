import React from 'react'
import Card from 'react-bootstrap/Card'
import { Transaction } from '../../lib/types'
import { Form } from 'react-bootstrap'

export const CardComponents = (props: Transaction) => {
  return (
    <Card className='p-2'>
      <Card.Body className='p-4 d-flex'>
        <div className=''>
          <Form.Check />
        </div>

        <div className='d-flex justify-content-between mx-3 col-10'>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.type === 'income' ? (
              <h5 className='text-success'>{props.amount}</h5>
            ) : (
              <h5 className='text-danger'>{props.amount}</h5>
            )}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}
