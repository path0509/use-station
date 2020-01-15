import * as React from 'react'
import { useSend } from '../../../src'
import Form from '../components/Form'
import Pre from '../components/Pre'
import Confirm from './Confirm'

const Send = ({ denom }: { denom: string }) => {
  const { card, form, confirm } = useSend(denom)

  return card ? (
    <Pre>{card}</Pre>
  ) : confirm ? (
    <Confirm {...confirm} />
  ) : form ? (
    <Form form={form} />
  ) : null
}

export default Send
