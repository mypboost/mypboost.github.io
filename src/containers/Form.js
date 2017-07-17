import { connect } from 'react-redux';
import { updateSlider, updateField, blurField, submitForm } from '../actions';
import FormComponent from '../components/Form';

const mapStateToProps = (state) => ({
  currentSliders: state.getIn(["form", "currentSliders"]),
  goalSliders: state.getIn(["form", "goalSliders"]),
  fields: state.getIn(["form", "fields"]),
  canSubmit: state.getIn(["form", "canSubmit"])
});

const mapDispatchToProps = {
  onSliderUpdate: updateSlider,
  onFieldUpdate: updateField,
  onFieldBlur: blurField,
  onFormSubmit: submitForm
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);

export default Form;
