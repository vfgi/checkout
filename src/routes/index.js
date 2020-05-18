
import React from 'react'
import { Switch, Route } from 'react-router'


import Page from '../page/checkout'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Page}/>
  </Switch>
)

export default Routes