import { ChangeEvent } from 'react'

export interface FormFieldProps {
  label: string
  name: string
  type: string
  required: boolean
  onChange?(event: ChangeEvent<HTMLInputElement>): void
}

export interface LoginProps {
  email: string
  password: string
}
export interface Transaction {
  type: string
  transactionId: string
  amount: string
  name: string
}

export type TransactionPayload = Omit<Transaction, 'transactionId'>
