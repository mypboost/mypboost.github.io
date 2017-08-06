import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Form from './containers/Form';
import Results from './containers/Results';
import Week1 from './components/video-pages/Week1Page';
import Week2 from './components/video-pages/Week2Page';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Form}/>
      <Route exact path="/results.html" component={Results}/>
      <Route exact path="/ahaon.html" component={Week1}/>
      <Route exact path="/deux.html" component={Week2}/>
    </div>
  </BrowserRouter>
);

export default Router;
