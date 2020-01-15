import * as React from 'react'
import { uniq } from 'ramda'
import { useAuth, useSignInWithLedger } from '../../../src'

const Auth = () => {
  const { user, signIn, signOut } = useAuth()
  const signInWithLedger = useSignInWithLedger(async () => await recent[0])

  const localRecent = localStorage.getItem('recent')
  const recent: string[] = localRecent ? JSON.parse(localRecent) : []

  const handleSignIn = (address: string) => {
    const user = { address, ledger: true }
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('recent', JSON.stringify(uniq([address, ...recent])))
    signIn(user)
  }

  return (
    <>
      {user && (
        <code className="navbar-text">
          {user.name ?? user.address.slice(-3)}
        </code>
      )}

      {recent.map(address => (
        <button
          className="btn btn-sm btn-outline-secondary ml-1"
          onClick={() => handleSignIn(address)}
          disabled={!!user}
          key={address}
        >
          {address.slice(-3)}
        </button>
      ))}

      <button
        className="btn btn-sm btn-outline-success ml-1"
        onClick={signInWithLedger.request}
        disabled={!!user}
      >
        Ledger
      </button>

      <button
        className="btn btn-sm btn-outline-success ml-1"
        onClick={() => {
          const address = prompt()?.trim()
          address && handleSignIn(address)
        }}
        disabled={!!user}
      >
        Sign in
      </button>

      <button
        className="btn btn-sm btn-outline-danger ml-1"
        onClick={() => {
          localStorage.removeItem('user')
          signOut()
        }}
        disabled={!user}
      >
        Sign Out
      </button>
    </>
  )
}

export default Auth
