import React from 'react'
import Card from 'react-bootstrap/Card'
import { Transaction } from '../../lib/types'

export const CardComponents = (props: Transaction) => {
  return (
    <Card>
      <Card.Body className='d-flex justify-content-around p-3'>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>{props.amount}</span>
        </Card.Text>
        <Card.Text>
          <span>{props.type}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
