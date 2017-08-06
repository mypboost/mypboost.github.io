import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Form from './containers/Form';
import Results from './containers/Results';
import Week1 from './components/video-pages/Week1';
import Week2 from './components/video-pages/Week2Combined';
import Footer from './components/Footer';

const Router = () => (
  <BrowserRouter>
    <div id='page-top-anchor' className="main">
      <div className="site-header">
        <img src="assets/logo/myp-logo.png" />
      </div>
      <Route exact path="/" component={Form}/>
      <Route exact path="/results.html" component={Results}/>
      <Route exact path="/ahaon.html" component={Week1}/>
      <Route exact path="/deux.html" component={Week2}/>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
