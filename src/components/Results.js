import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import Page from './Page';
import ResultsTable from './ResultsTable';
import ScoreCard from './ScoreCard';

import '../style/results.scss';

class Results extends React.Component {

  render(){
    const { currentSliders, goalSliders, fields, currentScore, goalScore, gdd } = this.props;
    const name = fields.getIn(["name", "value"]) || "NAME";
    const sex = fields.getIn(["sex", "value"]) || "SOME GENDER";
    const gulf = goalScore - currentScore;

    return (
      <Page>
        <h2 className="large-header">Your MYPCO Lite Score</h2>
        <p className="body form-intro-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>

        <ResultsTable
          currentSliders={currentSliders}
          goalSliders={goalSliders}
        />

        <h3 className="small-header score-card-header">
          MYPCo Lite Overall Scores
        </h3>

        <div className="score-card-container">
          <ScoreCard
            name={"GDD"}
            tooltipText={"sweet tips"}
            numerator={100}
            denominator={1000}
          />
          <ScoreCard
            name={"Current"}
            tooltipText={"sweet tips"}
            numerator={100}
            denominator={1000}
            className="highlighted"
          />
          <ScoreCard
            name={"Goal"}
            tooltipText={"sweet tips"}
            numerator={100}
            denominator={1000}
          />
        </div>

        <h3 className="small-header focus-on-header">
         Great job, { name }!
        </h3>

        <p className="body focus-on-text">
          You're currently scoring { currentScore } (out of 1000). On average a&nbsp;
          { sex } your age scores { gdd }. According to your math you're still&nbsp;
          { gulf } points of your aspirational MYPCo goal of { goalScore }.
        </p>

      </Page>
    );
  }
}

Results.propTypes = {
  currentSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  goalSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  fields: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Results;
