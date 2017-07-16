import { connect } from 'react-redux';
import ResultsComponent from '../components/Results';

const mapStateToProps = (state) => ({
  currentSliders: state.getIn(["form", "currentSliders"]),
  goalSliders: state.getIn(["form", "goalSliders"]),
  fields: state.getIn(["form", "fields"])
});

const mapDispatchToProps = {
};

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsComponent);

export default Results;
