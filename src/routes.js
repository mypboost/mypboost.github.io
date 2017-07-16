import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Form from './containers/Form';
import Results from './containers/Results';

const Router = () => (
  <BrowserRouter>
    <div className="main">
      <div className="site-header">
        <img src="assets/logo/myp-logo.png" />
      </div>
      <Route exact path="/" component={Form}/>
      <Route exact path="/results.html" component={Results}/>
      <Route exact path="/mypco/build/" component={Form}/>
      <Route exact path="/mypco/build/results.html" component={Results}/>
    </div>
  </BrowserRouter>
);

export default Router;
