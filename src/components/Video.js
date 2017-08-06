import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import '../style/page.scss';

class Video extends React.Component {
  render() {
    const className = this.props.className || "";
    return (
      <Page>
        
      </Page>
    );
  }
}

Page.propTypes = {
  image_path: PropTypes.string,
  link: PropTypes.string,
  info: PropTypes.string
};

export default Page;
