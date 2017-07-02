import React from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import Sliders from './Sliders';
import FormElement from './FormElement';
import FormInput from './FormInput';
import FormSelector from './FormSelector';
import Divider from './Divider';

class Form extends React.Component {

  submitForm(event){
    event.preventDefault()
    this.props.history.push('/results.html')
  }

  render() {
    const { name, age, sex, email } = this.props.fields.toJS()
    return (
      <Page>
        <h2 className="large-header">MYPCO Lite Score Generator</h2> 
        <p className="body"> 
          It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout. The point of 
          using Lorem Ipsum is that it has a more-or-less normal distribution 
        </p>

        <Divider>
          Step 1 of 3
        </Divider>

        <form className="form">
          <div className="form-element-container">
            <FormElement
              fieldTitle="Your Full Name"
              currentValue={name.value}
              placeholder="Your Name"
              fieldName="name"
              onFieldUpdate={this.props.onFieldUpdate}
              className="name-input"
            >
              <FormInput />
            </FormElement>

            <FormElement
              fieldTitle="Your Age"
              info="Your age tooltip"
              id="YourageId"
              currentValue={age.value}
              placeholder="Your Age"
              fieldName="age"
              onFieldUpdate={this.props.onFieldUpdate}
              className="age-input"
            >
              <FormInput />
            </FormElement>

            <FormElement
              fieldTitle="Your Sex"
              info="Your sex tooltip"
              id="YoursexId"
              fieldName="sex"
              onFieldUpdate={this.props.onFieldUpdate}
              currentValue={sex.value}
              component={<FormInput />}
              className="sex-input"
            >
              <FormSelector option="male" />
              <FormSelector option="female" />
            </FormElement>
          
            <FormElement
              fieldTitle="Your Email Address"
              currentValue={email.value}
              placeholder="you@email.com"
              fieldName="email"
              onFieldUpdate={this.props.onFieldUpdate}
              className="email-input"
            >
              <FormInput />
            </FormElement>
          </div>

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
        </form>
      </Page>
    )
  }
}

Form.propTypes = {

}

export default Form;
