import React from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import Sliders from './Sliders';

class Form extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Page>
        <Sliders sliders={this.props.currentSliders} />
      </Page>
    )
  }
}

Form.propTypes = {

}

export default Form;
