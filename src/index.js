import React from 'react';
import {render} from 'react-dom';

import './style.css'

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
