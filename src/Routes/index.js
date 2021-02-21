import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Estetica from '../pages/estetica'
import Aparelhos from '../pages/aparelhos'
import Form from '../pages/form'
import Form2 from '../pages/form2'
import Home from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/estetica" component={Estetica} />
      <Route path="/aparelho" component={Aparelhos} />
      <Route path="/form2" exact component={Form2} />
      <Route path="/form" exact component={Form} />
    </Switch>
  )
}

export default Routes
