import * as React from 'react'
import { useConfirmSeed } from '../../../src'
import Form from '../components/Form'
import Field from '../components/Field'
import Pre from '../components/Pre'

const ConfirmSeed = props => {
  const { form, hint, result } = useConfirmSeed(props)
  const { title, fields, disabled, submitLabel, onSubmit } = form

  return result ? (
    <Pre>{result}</Pre>
  ) : (
    <Form form={form}>
      {hint.map(({ label, onClick }) => (
        <button
          type="button"
          className="btn btn-light"
          onClick={() => onClick(0)}
          key={label}
        >
          {label}
        </button>
      ))}
    </Form>
  )
}

export default ConfirmSeed
