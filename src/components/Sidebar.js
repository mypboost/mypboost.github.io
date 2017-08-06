import React from 'react';
import PropTypes from 'prop-types';

import '../style/sidebar.scss';

class Sidebar extends React.Component {

  render() {
    const currentVisibility = this.props.visible ? "visible" : "";

    return (
      <div className={"sidebar " + currentVisibility}>
        {this.props.children}
      </div>
    );
  }
}

Sidebar.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ])
};

export default Sidebar;
