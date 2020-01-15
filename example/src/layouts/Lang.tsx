import * as React from 'react'
import { useConfig } from '../../../src'

const Lang = () => {
  const { lang } = useConfig()
  const { current, list, set } = lang

  return (
    <div className="btn-group btn-group-sm mr-1">
      {list.map(({ key, name }) => {
        const handleClick = () => {
          localStorage.setItem('lang', key)
          set(key)
        }

        return (
          <button
            className="btn btn-secondary"
            onClick={handleClick}
            disabled={current === key}
            key={key}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default Lang
