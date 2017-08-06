import React from 'react';
import PropTypes from 'prop-types';
import '../style/page.scss';


class SidebarPage extends React.Component {
  render() {
    return null;
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ]),
};

export default Page;
