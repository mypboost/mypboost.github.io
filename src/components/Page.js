import React from 'react';
import PropTypes from 'prop-types';
import '../style/page.scss';

class Page extends React.Component {
  render() {
    const className = this.props.className || "";
    return (
      <div className={ "page " + className }>
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ]),
  className: PropTypes.string
};

export default Page;
