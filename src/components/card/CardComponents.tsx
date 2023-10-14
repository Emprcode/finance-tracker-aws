import React from 'react'
import Card from 'react-bootstrap/Card'
import { Transaction } from '../../lib/types'

export const CardComponents = (props: Transaction) => {
  return (
    <Card>
      <Card.Body className='d-flex justify-content-around p-3'>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <h5>{props.amount}</h5>
          {/* <span>{props.type}</span> */}
        </Card.Text>
        <Card.Text>
          {/* <h5>{props.amount}</h5> */}
          <span>{props.type}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
