import React from 'react';
import PropTypes from 'prop-types';
import '../style/page.scss';


class Page extends React.Component {


  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.array
};

export default Page;
