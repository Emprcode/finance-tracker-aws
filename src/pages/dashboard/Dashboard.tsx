import { Container, Row } from 'react-bootstrap'
import { MainLayout } from '../../components/layout/mainLayout/MainLayout'
import React, { useEffect } from 'react'
import { CardComponents } from '../../components/card/CardComponents'
import { data } from '../../lib/dummyData'
import { getAllTransactions } from '../../components/helper/AxiosHelper'

const Dashboard = () => {
  // const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransaction()
  }, [])
  const getTransaction = async () => {
    const result = await getAllTransactions()
    console.log(result)
  }

  return (
    <MainLayout>
      <Container className='p-3'>
        <Row className='mt-4 gap-5'>
          <h2 className='text-center'>Transactions</h2>

          <Row className='d-flex gap-4'>
            {data?.map((item, i) => <CardComponents key={i} {...item} />)}
          </Row>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Dashboard
