import React from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import Sliders from './Sliders';
import FormElement from './FormElement';
import FormInput from './FormInput';

class Form extends React.Component {

  render() {
    const { name, age, sex, email } = this.props.fields.toJS()
    return (
      <Page>
        <FormElement
          fieldTitle={name.fieldTitle}
          info={name.info}
          value={name.value}
          placeholder={name.placeholder}
          name="name"
          onFieldUpdate={this.props.onFieldUpdate}
          component={<FormInput />}
        />

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
