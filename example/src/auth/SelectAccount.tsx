import * as React from 'react'
import { useSelectAccount } from '../../../src'
import Form from '../components/Form'
import Pre from '../components/Pre'

const SelectAccount = props => {
  const generateAddresses = () => ['terra1', 'terra1']
  const { form, result } = useSelectAccount({ ...props, generateAddresses })
  return result ? <Pre>{result}</Pre> : form ? <Form form={form} /> : null
}

export default SelectAccount
