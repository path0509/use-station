import * as React from 'react'
import { useConfirm } from '../../../src'
import Coin from '../components/Coin'
import Pre from '../components/Pre'

const Confirm = confirm => {
  const { form, fee, contents, result } = useConfirm(confirm, () => '')

  return !result ? (
    <article>
      <h1>{form.title}</h1>
      <dl className="row">
        {contents.map(({ name, text, displays }) => (
          <React.Fragment key={name}>
            <dt className="col-sm-4">{name}</dt>
            <dd className="col-sm-8">
              {text ?? displays?.map((d, i) => <Coin {...d} key={i} />)}
            </dd>
          </React.Fragment>
        ))}

        <dt className="col-sm-4">
          <div className="d-flex align-items-center">
            {fee.label}
            {!fee.status && (
              <select
                {...fee.select.attrs}
                className="form-control"
                onChange={e => fee.select.setValue(e.target.value)}
              >
                {fee.select.options.map(option => (
                  <option {...option} key={option.value} />
                ))}
              </select>
            )}
          </div>
        </dt>

        <dd className="col-sm-8">
          {fee.status || (
            <input
              {...fee.input.attrs}
              className="form-control"
              onChange={e => fee.input.setValue(e.target.value)}
            />
          )}
        </dd>
      </dl>

      <button
        className="btn btn-primary"
        onClick={form.onSubmit}
        disabled={form.disabled}
      >
        {form.submitLabel}
      </button>
    </article>
  ) : (
    <Pre>{result}</Pre>
  )
}

export default Confirm
