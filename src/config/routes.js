import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import IniciarSessaoPage from '../pages/IniciarSessaoPage'
import HomePage from '../pages/HomePage'


export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/iniciarsessao' exact={true}>
          <IniciarSessaoPage />
        </Route>
      </Switch>
    </Router>
  )
}
