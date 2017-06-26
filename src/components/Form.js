import React from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import Sliders from './Sliders';
import FormElement from './FormElement';

class Form extends React.Component {

  render() {
    return (
      <Page>
        <FormElement name="Your Full Name" info="i">
           <input onChange={this.props.onFieldUpdate} />
        </FormElement>

        <h2>Current Sliders</h2>
        <Sliders
          onSliderUpdate={this.props.onSliderUpdate}
          sliders={this.props.currentSliders}
          group={"currentSliders"}
         />

         <h2>Goal Sliders</h2>
         <Sliders
           onSliderUpdate={this.props.onSliderUpdate}
           sliders={this.props.goalSliders}
           group={"goalSliders"}
          />
      </Page>
    )
  }
}

Form.propTypes = {

}

export default Form;
