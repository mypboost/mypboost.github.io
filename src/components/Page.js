import React from 'react';
import PropTypes from 'prop-types';
import '../style/page.scss';


class Page extends React.Component {


  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}


export default Page;
