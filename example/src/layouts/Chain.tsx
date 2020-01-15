import * as React from 'react'
import { useConfig } from '../../../src'

const Chain = () => {
  const { chain } = useConfig()
  const { current, list, set } = chain

  return (
    <div className="btn-group btn-group-sm mr-1">
      {list.map(item => {
        const handleClick = () => {
          localStorage.setItem('chain', item)
          set(item)
        }

        return (
          <button
            className="btn btn-secondary"
            onClick={handleClick}
            disabled={current === item}
            key={item}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Chain
