import * as React from 'react'
import { useDashboard } from '../../../src'
import Pre from '../components/Pre'

const Dashboard = () => {
  const { ui } = useDashboard()
  return <Pre>{ui}</Pre>
}

export default Dashboard
