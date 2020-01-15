import * as React from 'react'
import Form from '../components/Form'
import { useSignInWithAddress } from '../../../src'

const SignInWithAddress = () => {
  const { form } = useSignInWithAddress()
  return <Form form={form} />
}

export default SignInWithAddress
