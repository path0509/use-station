import * as React from 'react'
import classNames from 'classnames'
import { useAuthMenu } from '../../../src'
import Pre from '../components/Pre'
import SignUp from '../auth/SignUp'
import SignIn from '../auth/SignIn'
import SignInWithAddress from '../auth/SignInWithAddress'
import SignInWithLedger from '../auth/SignInWithLedger'

const component = {
  recover: () => <SignUp recover key="recover" />,
  signUp: () => <SignUp />,
  signIn: () => <SignIn />,
  signInWithAddress: () => <SignInWithAddress />,
  signInWithLedger: () => <SignInWithLedger />
}

const Welcome = () => {
  const keys = Object.keys(component)
  const { list, ui } = useAuthMenu(keys)
  const [currentKey, setCurrentKey] = React.useState('signInWithAddress')

  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="list-group">
          {list.map(({ label, key }) => (
            <button
              className={classNames(
                'list-group-item list-group-item-action',
                key === currentKey && 'active'
              )}
              onClick={() => setCurrentKey(key)}
              key={key}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="col-sm-8">
        {!currentKey ? <Pre>{ui}</Pre> : component[currentKey]()}
      </div>
    </div>
  )
}

export default Welcome
