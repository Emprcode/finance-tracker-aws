import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { FormComponents } from '../../components/formComponents/FormComponents'
import './Login.css'
const Login = () => {
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

          <Form>
            {inputs.map((item, i) => (
              <FormComponents key={i} {...item} />
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
