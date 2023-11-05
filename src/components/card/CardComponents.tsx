import React from 'react'
import Card from 'react-bootstrap/Card'
import { Transaction } from '../../lib/types'
import { Col, Row } from 'react-bootstrap'
import { DeleteModal } from '../deleteModal/DeleteModal'

export const CardComponents = (props: Transaction) => {
  return (
    <Card className=' bg-light'>
      <Row className='p-4 d-flex justify-content-center '>
        <Col className=''>
          <Card.Title className=''>
            <h4 className=''>{props.name}</h4>
          </Card.Title>
        </Col>
        <Col className='d-flex justify-content-end  gap-5 '>
          <Card.Text className=''>
            {props.type === 'income' ? (
              <h5 className='text-success'>+${props.amount}.00</h5>
            ) : (
              <h5 className='text-danger'>-${props.amount}.00</h5>
            )}
          </Card.Text>
          <DeleteModal {...props} />
        </Col>
      </Row>
    </Card>
  )
}
