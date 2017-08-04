import { connect } from 'react-redux';

import {
  updateSlider,
  updateField,
  blurField,
  submitForm,
  setScrollToErrors
} from '../actions';

import FormComponent from '../components/Form';

const mapStateToProps = (state) => ({
  currentSliders: state.getIn(["form", "currentSliders"]),
  goalSliders: state.getIn(["form", "goalSliders"]),
  fields: state.getIn(["form", "fields"]),
  currentScore: state.getIn(["form", "currentScore"]),
  goalScore: state.getIn(["form", "goalScore"]),
  overallGdd: state.getIn(["form", "overallGdd"]),
  canSubmit: state.getIn(["form", "canSubmit"]),
  scrollToErrors: state.getIn(["form", "scrollToErrors"])
});

const mapDispatchToProps = {
  onSliderUpdate: updateSlider,
  onFieldUpdate: updateField,
  onFieldBlur: blurField,
  onFormSubmit: submitForm,
  setScrollToErrors
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);

export default Form;
