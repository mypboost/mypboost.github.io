import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

  renderHamburger() {
    if (this.props.displayHamburger === true) {
      const onClick = this.props.hamburgerOnClick || null;

      return (
        <div className="hamburger-container">
          <p
            className={"hamburger " + this.props.hamburgerClass}
            onClick={onClick}
          >
            ☰
          </p>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="site-header" id='page-top-anchor'>
        <img src="assets/logo/myp-logo.png" />
        {this.renderHamburger()}
      </div>
    );
  }
}

Header.propTypes = {
  displayHamburger: PropTypes.bool,
  hamburgerClass: PropTypes.string,
  hamburgerOnClick: PropTypes.func
};

export default Header;
