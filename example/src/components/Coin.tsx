import * as React from 'react'

const Coin = ({ value, unit }) => <>{[value, unit].join(' ')}</>

export default Coin
