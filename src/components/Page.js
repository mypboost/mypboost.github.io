import React from 'react';
import PropTypes from 'prop-types';
import '../style/page.scss';


class Page extends React.Component {


  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    )
  }
}


export default Page;
