import React from 'react'
import App from './App';
import Cart from './Cart.js';
import { Switch, Route } from 'react-router-dom'
const MyRouter = () => (
  <main>
    <Switch>
      <Route exact path='/index.html' component={App}/>
      <Route path='/cart.html' component={Cart}/>
    </Switch>
  </main>
)

export default MyRouter;
