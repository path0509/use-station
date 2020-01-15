import * as React from 'react'

const MaxButton = ({ attrs, label, display }) => (
  <button type="button" {...attrs} className="btn btn-link btn-sm">
    {label}: {display.value}
  </button>
)

export default MaxButton
