import * as React from 'react'
import Form from '../components/Form'
import SelectAccount from './SelectAccount'
import ConfirmSeed from './ConfirmSeed'
import { useSignUp } from '../../../src'

const SignUp = ({ recover = false }: { recover?: boolean }) => {
  const form = useSignUp({
    generated: recover ? undefined : Array.from({ length: 24 }, () => ''),
    isNameExists: () => false,
    submit: async () => 'terra1'
  })

  const { title, fields, onSubmit, disabled, submitLabel, mnemonic } = form
  const { next } = form

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  const render = {
    select: () => <SelectAccount {...next} />,
    confirm: () => <ConfirmSeed {...next} />
  }

  return render[next.step] ? (
    render[next.step]()
  ) : (
    <Form form={form}>
      {mnemonic.fields.map(({ label, attrs, setValue }, index) => {
        const name = String(label)

        return (
          <div className="form-group row" key={name}>
            <label htmlFor={name} className="col-sm-1 col-form-label">
              {label}
            </label>

            <div className="col-sm-11">
              <input
                {...attrs}
                id={name}
                className="form-control"
                onChange={e => setValue(e.target.value)}
                onPaste={e => {
                  e.preventDefault()
                  mnemonic.paste(e.clipboardData.getData('text'), index)
                }}
              />
            </div>
          </div>
        )
      })}
    </Form>
  )
}

export default SignUp
