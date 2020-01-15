import * as React from 'react'
import { useAssets } from '../../../src'
import Pre from '../components/Pre'

const Bank = () => {
  const { card, ui } = useAssets()
  return <Pre>{card || ui}</Pre>
}

export default Bank
