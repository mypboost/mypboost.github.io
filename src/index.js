// import React from 'react';
// import {render} from 'react-dom';
//
// import './style.css'
//
// class App extends React.Component {
//   render () {
//     return <p> Hello React!</p>;
//   }
// }
//
// render(<App/>, document.getElementById('app'));

import PageContainer from './containers/PageContainer';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <PageContainer />,
  document.getElementById('page')
);
