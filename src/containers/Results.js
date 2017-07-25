import { connect } from 'react-redux';
import ResultsComponent from '../components/Results';

const mapStateToProps = (state) => ({
  currentSliders: state.getIn(["form", "currentSliders"]),
  goalSliders: state.getIn(["form", "goalSliders"]),
  fields: state.getIn(["form", "fields"]),
  currentScore: state.getIn(["form", "currentScore"]),
  goalScore: state.getIn(["form", "goalScore"]),
  gdd: state.getIn(["form", "gdd"]),
});

const mapDispatchToProps = {
};

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsComponent);

export default Results;
