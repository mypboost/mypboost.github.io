import { connect } from 'react-redux';
import ResultsComponent from '../components/Results';

const mapStateToProps = (state) => ({
  currentSliders: state.getIn(["form", "currentSliders"]),
  goalSliders: state.getIn(["form", "goalSliders"]),
  fields: state.getIn(["form", "fields"]),
  currentScore: state.getIn(["form", "currentScore"]),
  goalScore: state.getIn(["form", "goalScore"]),
  gddValues: state.getIn(["form", "gddValues"]),
  overallGdd: state.getIn(["form", "overallGdd"]),
});

const mapDispatchToProps = {
};

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsComponent);

export default Results;
