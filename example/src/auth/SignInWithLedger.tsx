import * as React from 'react'
import { useSignInWithLedger } from '../../../src'
import Pre from '../components/Pre'

const SignInWithLedger = () => {
  const { card } = useSignInWithLedger(async () => await '')
  return <Pre>{card}</Pre>
}

export default SignInWithLedger
