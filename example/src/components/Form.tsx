import * as React from 'react'
import Field from './Field'

const Form = ({ form, children }) => {
  const { title, fields, disabled, submitLabel, onSubmit } = form

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>

      {fields.map(field => (
        <Field {...field} key={field.attrs.id} />
      ))}

      {children}

      <button type="submit" className="btn btn-primary" disabled={disabled}>
        {submitLabel}
      </button>
    </form>
  )
}

export default Form
