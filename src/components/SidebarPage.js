import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import Sidebar from './Sidebar';

class SidebarPage extends React.Component {
  sidebarContent() {
    return (
      <p> hey! </p>
    );
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <Sidebar visible={true}>
          <p>hey</p>
        </Sidebar>
        <Page>
          <p>hey</p>
        </Page>
      </div>
    );
  }
}

SidebarPage.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ]),
};

export default SidebarPage;
