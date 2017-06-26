import { connect } from 'react-redux'
import { updateSlider, updateField } from '../actions'
import FormComponent from '../components/Form'

const mapStateToProps = (state) => ({
  currentSliders: state.getIn(["form", "currentSliders"]),
  goalSliders: state.getIn(["form", "goalSliders"])
})

const mapDispatchToProps = {
  onSliderUpdate: updateSlider,
  onFieldUpdate: updateField,
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent)

export default Form;
