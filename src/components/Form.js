import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Sliders from './Sliders';
import FormElement from './FormElement';
import FormInput from './FormInput';
import FormSelection from './FormSelection';
import Divider from './Divider';
import { postForm } from '../utils/post-form';
import scrollTo from '../utils/scroll-to';

import '../style/form.scss';

class Form extends React.Component {

  submitForm(event){
    event.preventDefault();
    this.props.onFormSubmit();
  }

  componentDidUpdate(){
    this.submitIfValid();
  }

  submitIfValid(){
    if (this.props.canSubmit) {
      this.props.history.push('/results.html');
      this.postForm();
    }
    else if(this.props.scrollToErrors === true) {
      scrollTo('form-errors-anchor', 20);
      this.props.setScrollToErrors(false);
    }
  }

  postForm() {
    postForm(Immutable.fromJS({
      fields: this.props.fields,
      currentSliders: this.props.currentSliders,
      goalSliders: this.props.goalSliders,
      currentScore: this.props.currentScore,
      goalScore: this.props.goalScore,
      gdd: this.props.overallGdd
    }));
  }

  render() {
    const { name, age, sex, email } = this.props.fields.toJS();
    return (
      <div className="main">
        <Header />
        <Page>
          <h2 className="large-header">MYPCo. Lite Score Generator</h2>
          <p className="body form-intro-text">
            Welcome to MYP Boost! YOU have made a commitment to YOURSELF and to those
            who are close to YOU. The key to MYP and YOUR success is the application of
            small consistent steps applied daily to YOUR routine.
          </p>

          <Divider className="step-1-divider">
            Step 1 of 3
          </Divider>

          <h3 id="form-errors-anchor" className="section-header section-header-1">
            Tell us a little about yourself...
          </h3>

          <form className="form">
            <div className="form-element-container">
              <FormElement
                fieldTitle="Your Name"
                currentValue={name.value}
                errors={name.errors}
                placeholder="Your Name"
                fieldName="name"
                onFieldUpdate={this.props.onFieldUpdate}
                onFieldBlur={this.props.onFieldBlur}
                className="name-input"
              >
                <FormInput />
              </FormElement>

              <FormElement
                fieldTitle="Your Age"
                info="Your age is required for us to generate your personal MYPCo. score."
                currentValue={age.value}
                errors={age.errors}
                placeholder="Your Age"
                fieldName="age"
                onFieldUpdate={this.props.onFieldUpdate}
                onFieldBlur={this.props.onFieldBlur}
                className="age-input"
              >
                <FormInput />
              </FormElement>

              <FormElement
                fieldTitle="Your Sex"
                info="Your sex is required for us to generate your personal MYPCo. score."
                fieldName="sex"
                onFieldUpdate={this.props.onFieldUpdate}
                currentValue={sex.value}
                errors={sex.errors}
                component={<FormInput />}
                className="sex-input"
              >
                <FormSelection options={["Male", "Female"]} />
              </FormElement>

              <FormElement
                fieldTitle="Your Email Address"
                currentValue={email.value}
                errors={email.errors}
                placeholder="you@email.com"
                fieldName="email"
                onFieldUpdate={this.props.onFieldUpdate}
                onFieldBlur={this.props.onFieldBlur}
                className="email-input"
              >
                <FormInput />
              </FormElement>
            </div>

            <Divider className="step-2-divider">
              Step 2 of 3
            </Divider>

            <h3 className="section-header section-header-2">
              {"Where are you at right now?"}
            </h3>

            <p className="body section-two-text">
              Using the sliders below, please tell us where you’d currently rank
              yourself (on a scale of 0-1000) in each of our MYP BIG6 Life
              Dimensions and your overall happiness.
            </p>

            <Sliders
              onSliderUpdate={this.props.onSliderUpdate}
              sliders={this.props.currentSliders}
              group={"currentSliders"}
            />

            <Divider className="step-3-divider">
              Step 3 of 3
            </Divider>

            <h3 className="section-header section-header-3">
              {"Where do you want to be?"}
            </h3>

            <p className="body section-three-text">
              You have told us where you are currently with regards to your MYP life
              dimensions. Now for the exciting part of the process... We want to know
              where you want to be. What are your aspirational scores for each dimension?
            </p>

            <Sliders
              onSliderUpdate={this.props.onSliderUpdate}
              sliders={this.props.goalSliders}
              group={"goalSliders"}
              />

            <p className="body section-three-generate-text">
              Now you have identified your current situation and your aspirational one.
              It’s time to calculate your MYPCo. score. This will identify your current
              score and your aspirational score. We’ll also compare how you stack up
              against your peers through our GDD (Global Demographic Database).
            </p>

            <button
              className="lime-button"
              onClick={this.submitForm.bind(this)}
            >
              GENERATE MYPCO LITE SCORE
            </button>
          </form>
        </Page>
        <Footer />
      </div>
    );
  }
}

Form.propTypes = {
  currentSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  goalSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  fields: PropTypes.instanceOf(Immutable.Map).isRequired,
  currentScore: PropTypes.number.isRequired,
  goalScore: PropTypes.number.isRequired,
  overallGdd: PropTypes.number.isRequired,
  onSliderUpdate: PropTypes.func.isRequired,
  onFieldUpdate: PropTypes.func.isRequired,
  onFieldBlur: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  canSubmit: PropTypes.bool.isRequired,
  scrollToErrors: PropTypes.bool.isRequired,
  setScrollToErrors: PropTypes.func.isRequired
};

export default Form;
