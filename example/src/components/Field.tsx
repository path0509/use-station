import * as React from 'react'
import MaxButton from './MaxButton'

const Field = ({ label, element, attrs, setValue, error, ...rest }) => {
  const { options, button, unit } = rest

  const input = (
    <input
      {...attrs}
      className="form-control"
      onChange={e => setValue(e.target.value)}
    />
  )

  const ui = {
    input: () =>
      !['checkbox', 'radio'].includes(attrs.type) ? (
        <div className="form-group">
          <div className="d-flex justify-content-between">
            <label htmlFor={attrs.id}>{label}</label>
            {button && <MaxButton {...button} />}
          </div>

          {!unit ? (
            input
          ) : (
            <div className="input-group">
              {input}
              <div className="input-group-append">
                <span className="input-group-text">{unit}</span>
              </div>
            </div>
          )}

          {error && <small className="form-text text-muted">{error}</small>}
        </div>
      ) : (
        <div className="form-check">
          <input
            {...attrs}
            className="form-check-input"
            onChange={() => setValue()}
          />

          <label className="form-check-label" htmlFor={attrs.id}>
            {label}
          </label>
        </div>
      ),
    select: () => (
      <div className="form-group">
        <label htmlFor={attrs.id}>{label}</label>

        <select {...attrs} className="form-control">
          {options.map(option => (
            <option {...option} key={option.value} />
          ))}
        </select>
      </div>
    )
  }

  return ui[element] ? ui[element]() : null
}

export default Field
