import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useConfigState, ConfigProvider } from '../../../src'
import { useAuthState, AuthProvider } from '../../../src'
import routes from './routes'
import Auth from './Auth'
import Menu from './Menu'
import Lang from './Lang'
import Chain from './Chain'

const App = () => {
  const initialState = {
    lang: localStorage.getItem('lang'),
    chain: localStorage.getItem('chain')
  }

  const localUser = localStorage.getItem('user')
  const initialUser = localUser ? JSON.parse(localUser) : undefined

  const config = useConfigState(initialState)
  const auth = useAuthState(initialUser)

  const { current: currentLang } = config.lang
  const { current: currentChain } = config.chain

  return (
    <Router>
      <ConfigProvider value={config}>
        {currentLang && (
          <AuthProvider value={auth} key={currentLang}>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <Menu />
                <Auth />
              </div>
            </nav>

            <div className="container">
              <section className="m-2">
                <Chain />
                <Lang />
              </section>

              <main>
                {currentChain && (
                  <React.Fragment key={currentChain}>{routes}</React.Fragment>
                )}
              </main>
            </div>
          </AuthProvider>
        )}
      </ConfigProvider>
    </Router>
  )
}

export default App
