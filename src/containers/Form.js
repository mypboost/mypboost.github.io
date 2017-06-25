import { connect } from 'react-redux'
// import { decrementCounter, incrementCounter } from '../actions'
import FormComponent from '../components/Form'


const mapStateToProps = (state) => ({
  currentSliders: state.form.currentSliders
})

const mapDispatchToProps = {
  // onDecrementClick: decrementCounter,
  // onIncrementClick: incrementCounter
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent)

export default Form;
