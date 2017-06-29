import React from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import Sliders from './Sliders';
import FormElement from './FormElement';
import FormInput from './FormInput';

class Form extends React.Component {


  submitForm(e){
    e.preventDefault()
    this.props.history.push('/mypco/build/results.html')
  }

  render() {
    const { name, age, sex, email } = this.props.fields.toJS()
    return (
      <Page>
        <FormElement
          fieldTitle="Your Full Name"
          info="i"
          value={name.value}
          placeholder="Your Name"
          name="name"
          onFieldUpdate={this.props.onFieldUpdate}
          component={<FormInput />}
        />

       <FormElement
          fieldTitle="Your Age"
          info="i"
          value={age.value}
          placeholder="Your Age"
          name="age"
          onFieldUpdate={this.props.onFieldUpdate}
          component={<FormInput />}
        />

       <FormElement
          fieldTitle="Your Sex"
          info="i"
          value={sex.value}
          name="sex"
          onFieldUpdate={this.props.onFieldUpdate}
          component={<FormInput />}
        />

       <FormElement
          fieldTitle="Your Email Address"
          info="i"
          value={email.value}
          placeholder="you@email.com"
          name="email"
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
      <button onClick={this.submitForm.bind(this)}>futton </button>
      </Page>
    )
  }
}

Form.propTypes = {

}

export default Form;
