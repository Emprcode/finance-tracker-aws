import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { AiFillDelete } from 'react-icons/ai'
import { deleteTransaction } from '../helper/AxiosHelper'
import { Transaction } from '../../lib/types'

export const DeleteModal = (props: Transaction) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleOnDelete = async (transactionId: string) => {
    await deleteTransaction(transactionId)
    handleClose()
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this transaction?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            type='submit'
            onClick={() => handleOnDelete(props.transactionId)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='cursor'>
        <AiFillDelete size={25} onClick={handleShow} />
      </div>
    </>
  )
}
