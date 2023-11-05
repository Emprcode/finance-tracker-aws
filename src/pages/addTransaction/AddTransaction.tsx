import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { BsFilePlus } from 'react-icons/bs'
import { TransactionPayload } from '../../lib/types'
import { postTransaction } from '../../components/helper/AxiosHelper'

export const AddTransaction = () => {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState<TransactionPayload>({ name: '', amount: '', type: '' })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await postTransaction(form)
    handleClose()
  }
  return (
    <>
      <div className='cursor'>
        <BsFilePlus onClick={handleShow} size={35} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Transaction Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Transaction Name'
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='number'
                name='amount'
                placeholder='$$$'
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Transaction Type</Form.Label>
              <Form.Control
                type='text'
                name='type'
                placeholder='income/expense'
                required
                onChange={handleOnChange}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
