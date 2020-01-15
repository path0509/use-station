import * as React from 'react'
import Form from '../components/Form'
import { useSignIn } from '../../../src'

const SignIn = () => {
  const list = [{ name: 'terra1', address: 'terra1' }]
  const { form, incorrect } = useSignIn({ list, test: () => true })
  return <Form form={form} />
}

export default SignIn
