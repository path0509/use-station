import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from '../pages/Welcome'
import Dashboard from '../pages/Dashboard'
import Bank from '../pages/Bank'
import Send from '../pages/Send'

export default (
  <Switch>
    <Route path="/" component={Welcome} exact />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/bank" component={Bank} />

    <Route
      path="/send/:denom"
      render={({ match }) => <Send denom={match.params.denom} />}
    />
  </Switch>
)
