import { Card, Container, Row } from 'react-bootstrap'
import { MainLayout } from '../../components/layout/mainLayout/MainLayout'
import { CardComponents } from '../../components/card/CardComponents'
import React, { useEffect, useState } from 'react'
import { getAllTransactions } from '../../components/helper/AxiosHelper'
import { Transaction } from '../../lib/types'
import { FaUserAlt } from 'react-icons/fa'

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    getTransaction()
  }, [])
  const getTransaction = async () => {
    const result = await getAllTransactions()
    setTransactions(result)
  }

  const total = transactions?.reduce(
    (acc, transaction) =>
      transaction.type === 'income' ? acc + +transaction.amount : acc - +transaction.amount,
    0,
  )

  const incomeTotal = transactions?.reduce((acc, item) => {
    if (item.type === 'income') {
      return acc + +item.amount
    }
    return acc
  }, 0)

  const expenseTotal = transactions?.reduce((acc, item) => {
    if (item.type === 'expense') {
      return acc + +item.amount
    }
    return acc
  }, 0)

  return (
    <MainLayout>
      <Container className='p-3'>
        <Row className='p-4'>
          <div className='d-flex align-items-center gap-4'>
            <span>
              <FaUserAlt size={30} />
            </span>
            <div>
              <h4>Welcome!</h4>
              <h4>John</h4>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <h6 className='text-center'>Total Balance</h6>
                <Card.Title className='text-center h1 p-2'>{total}</Card.Title>

                <div className='d-flex justify-content-around'>
                  <Card.Subtitle className='mb-2 text-success'>
                    <h6>Income </h6>
                    <h6>{incomeTotal} </h6>
                  </Card.Subtitle>
                  <Card.Subtitle className='mb-2 text-danger'>
                    <h6>Expense</h6>
                    <h6>{expenseTotal}</h6>
                  </Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
        <Row className='mt-4  gap-5'>
          <h2 className='text-center'>Transactions</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <Row className='gap-3 col-8'>
              {transactions?.map((item, i) => <CardComponents key={i} {...item} />)}
            </Row>
          </div>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Dashboard
