import { Card, Container, Row } from 'react-bootstrap'
import { MainLayout } from '../../components/layout/mainLayout/MainLayout'
import { CardComponents } from '../../components/card/CardComponents'
import React, { useEffect, useState } from 'react'
import { getAllTransactions } from '../../components/helper/AxiosHelper'
import { Transaction } from '../../lib/types'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import { AddTransaction } from '../addTransaction/AddTransaction'
import './Dashboard.css'

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
  const name = sessionStorage.getItem('name')
  return (
    <MainLayout>
      <Container className='p-3'>
        <Row className='p-4'>
          <div className='d-flex align-items-center gap-4 p-3'>
            <span>
              <FaUserAlt size={30} />
            </span>
            <div>
              <h4>Welcome!</h4>
              <h4>{name}</h4>
            </div>
          </div>
          <div className='d-flex justify-content-center '>
            <Card style={{ width: '30rem' }} className='card-color p-4 border-0 shadow-lg'>
              <Card.Body className='text-center p-3'>
                <h5 className='text-center'>Total Balance</h5>
                <Card.Title className='text-center p-2'>
                  <h1 className='fw-bold'>{total}</h1>
                </Card.Title>

                <div className='d-flex justify-content-around flex-wrap'>
                  <Card.Subtitle className='mb-2 d-flex justify-content-center align-items-center gap-3'>
                    <BsFillArrowUpSquareFill size={35} />
                    <div>
                      <h5>Income </h5>
                      <h5 className='fw-bold'>$ {incomeTotal} </h5>
                    </div>
                  </Card.Subtitle>
                  <Card.Subtitle className='text-end mb-2 d-flex justify-content-end align-items-center gap-3'>
                    <BsFillArrowDownSquareFill size={35} />
                    <div>
                      <h5>Expense</h5>
                      <h5 className='fw-bold'>$ {expenseTotal}</h5>
                    </div>
                  </Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>

        <Row className='mt-4  gap-5'>
          <div className='d-flex justify-content-between p-3'>
            <h2 className='text-center'>Transactions</h2>

            <AddTransaction />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <Row className='gap-3 col-11'>
              {transactions?.map((item, i) => <CardComponents key={i} {...item} />)}
            </Row>
          </div>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Dashboard
