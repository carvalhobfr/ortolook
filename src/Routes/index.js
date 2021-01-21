import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Estetica from '../pages/estetica'
import Aparelhos from '../pages/aparelhos'
import Home from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/estetica" component={Estetica} />
      <Route path="/aparelho" component={Aparelhos} />
    </Switch>
  )
}

export default Routes
