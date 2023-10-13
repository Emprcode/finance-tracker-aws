import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { FormComponents } from '../../components/formComponents/FormComponents'
import './Login.css'
import { Auth } from 'aws-amplify'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { SignInProps } from '../../lib/types'
import { validUserSession } from '../../utils/utils'
const Login = () => {
  useEffect(() => {
    validUserSession()
  }, [])
  const navigate = useNavigate()
  const inputs = [
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
  ]

  const [form, setForm] = useState<SignInProps>({ email: '', password: '' })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const { email, password } = form
      await Auth.signIn(email, password)
      navigate('/dashboard')
    } catch (error) {
      // console.log('error signing in', error)
    }
  }
  return (
    <Container className='dash-height d-flex justify-content-center align-items-center'>
      <Row className='shadow-lg p-5'>
        <Col className='p-3 d-flex justify-content-center align-items-center text-center'>
          <div>
            <h1 className='fw-bold'>AWS Finance Tracker</h1>
          </div>
        </Col>
        <Col className='p-3'>
          <h5>Login</h5>
          <hr />

          <Form onSubmit={signIn}>
            {inputs.map((item, i) => (
              <FormComponents key={i} {...item} onChange={handleOnChange} />
            ))}

            <Button variant='primary' type='submit' className='rounded-pill mt-3 fw-bold'>
              Submit
            </Button>
            <hr />
            <div className='text-end'>
              <Link to='/register' className='nav-link fw-bold'>
                {' '}
                Register new account?
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
