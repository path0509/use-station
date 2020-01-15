import * as React from 'react'

const Pre = ({ children }) => <pre>{JSON.stringify(children, null, 2)}</pre>

export default Pre
