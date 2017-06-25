import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Form from './containers/Form'

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Form}/>
      <Route path="/example" component={Form}/>
    </div>
  </BrowserRouter>
)
export default Router;
