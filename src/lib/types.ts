import { ChangeEvent } from 'react'

export interface FormFieldProps {
  label: string
  name: string
  type: string
  required: boolean
  onChange?(event: ChangeEvent<HTMLInputElement>): void
}
export interface HeaderProps {
  isLoggedIn: boolean
}

export interface SignInProps {
  email: string
  password: string
}
