import React from 'react';
import Week1 from './Week1';
import Header from '../Header';
import Footer from '../Footer';

export default class Week1Page extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Week1 />
        <Footer />
      </div>
    );
  }
}
