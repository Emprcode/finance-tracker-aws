import { Form, FormProps } from 'react-bootstrap'

interface FormComponentsProps extends FormProps {
  label: string
}
export const FormComponents: React.FC<FormComponentsProps> = ({ label }) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>{label}</Form.Label>
      {/* <Form.Control {...rest} /> */}
    </Form.Group>
  )
}
