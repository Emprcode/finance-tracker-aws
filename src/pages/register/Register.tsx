import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FormComponents } from '../../components/formComponents/FormComponents'
import './Register.css'
import React from 'react'
const Register = () => {
  const inputs = [
    {
      label: 'UserName',
      type: 'text',
      name: 'name',
      required: true,
    },

    {
      label: 'Email',
      type: 'email',
      name: 'email',
      required: true,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      required: true,
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword',
      required: true,
    },
  ]

  return (
    <Container className='dash-height d-flex justify-content-center align-items-center'>
      <Row className='shadow-lg p-5'>
        <span>
          <Link to='/' className='nav-link fw-bold'>
            <BiArrowBack size={20} />
          </Link>
        </span>

        <Col className='p-3 d-flex justify-content-center align-items-center text-center'>
          <div>
            <h1 className='fw-bold'>AWS Finance Tracker</h1>
          </div>
        </Col>
        <Col className='p-3'>
          <h5 className=''>Register</h5>
          <hr />
          <Form>
            {inputs.map((item, i) => (
              <FormComponents key={i} {...item} />
            ))}
            <Button variant='primary' type='submit' className='rounded-pill mt-3 fw-bold'>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
