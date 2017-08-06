import React from 'react';
import PropTypes from 'prop-types';

import '../style/sidebar.scss';

class Sidebar extends React.Component {

  render() {
    return (
      <div className={"sidebar " + this.props.animationState}>
        <img src="./assets/boost-menu-logo.png" />
        {this.props.children}
      </div>
    );
  }
}

Sidebar.propTypes = {
  animationState: PropTypes.string,
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ])
};

export default Sidebar;
