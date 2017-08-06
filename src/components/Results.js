import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import ResultsTable from './ResultsTable';
import ScoreCard from './ScoreCard';
import FocusOn from './FocusOn';
import scrollTo from '../utils/scroll-to';

import '../style/results.scss';

class Results extends React.Component {

  componentDidMount(){
    scrollTo('page-top-anchor', -100);
  }

  render(){
    const name = this.props.fields.getIn(["name", "value"]) || "NAME";
    const sex = this.props.fields.getIn(["sex", "value"]) || "GENDER";
    const gulf = this.props.goalScore - this.props.currentScore;

    return (
      <div className="main">
        <Header />
        <Page className="results-top-page">
          <h2 className="large-header">Your MYPCo. Lite Score</h2>
          <p className="body form-intro-text">
            Thanks for taking the time to generate
            your MYPCo. Lite Score. You’ll be happy to know that you’re well on your way
            towards maximising your potential... the first step is always the hardest!
            We’ve done the math and your scores are listed below:
          </p>

          <ResultsTable
            currentSliders={this.props.currentSliders}
            goalSliders={this.props.goalSliders}
            gddValues={this.props.gddValues}
          />

          <h3 className="small-header score-card-header">
            MYPCo. Lite Overall Scores
          </h3>

          <div className="score-card-container">
            <ScoreCard
              name="GDD"
              tooltipText={`Your GDD (global demographic data) score shows
                            the average score for someone of your age/sex.`}
              numerator={ this.props.overallGdd }
              denominator={ 1000 }
            />
            <ScoreCard
              name="Current"
              tooltipText={`Your current score based on your self assessment
                            on the previous page.`}
              numerator={ this.props.currentScore }
              denominator={ 1000 }
              className="highlighted"
            />
            <ScoreCard
              name="Goal"
              tooltipText="Your goal score is where you aspire to be with the help of MYP."
              numerator={ this.props.goalScore }
              denominator={ 1000 }
            />
          </div>

          <h3 className="small-header focus-on-header">
          Great job, { name }!
          </h3>

          <p className="body focus-on-text-1">
            You’re currently scoring&nbsp;
            <span>{ this.props.currentScore }</span> (out of 1000). On average a&nbsp;
            { sex.toLowerCase() } your age scores&nbsp;
            <span>{ this.props.overallGdd }</span>. According to our math you’re still&nbsp;
            <span>{ gulf }</span> points off your aspirational MYPCo. goal of&nbsp;
            <span>{ this.props.goalScore }</span>.
          </p>

          <p className="body focus-on-text-2">
            Let’s begin your journey towards <span>{ this.props.goalScore }</span> now!
          </p>

          <p className="body focus-on-text-3">
            Based on your results we recommend you focus on these 3 MYP dimensions:
          </p>

          <FocusOn
            currentSliders={ this.props.currentSliders }
            goalSliders={ this.props.goalSliders }
          />

        </Page>

        <Page className="white-page">
          <h2 className="large-header">Start Maximising Your Potential Today!</h2>

          <img src='./assets/boost-graphic.png' />

          <p className="body block-1">
            <span>MYP BOOST</span> is the best tool to get you working towards
            your aspirational MYPCo. score. As an <span>MYP BOOST</span> member
            you will get access to six weekly <span>MYP BOOST</span> videos, notes
            and guides that will help you to improve your MYPCo. score.
          </p>

          <p className="body block-2">
            For a short time only, we’re offering early subscribers the chance to
            sign up for this service on a special rate of <span>just £9.99 per
            month</span>. That’s access to six videos (including extra additional
              content), four times a month for the price of one lunch. Please&nbsp;
            <a href="mailto:maxyourpotential@outlook.com">get in touch</a> if you’d like more information, or you
            can make a commitment to yourself right here, right now and subscribe
            to <span>MYP BOOST</span>...
          </p>

          <a href="http://myp.global/promo/boost-landing.html" className="lime-button">
            SUBSCRIBE TO MYP BOOST
          </a>

        </Page>
        <Footer />
      </div>
    );
  }
}

Results.propTypes = {
  currentSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  goalSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  fields: PropTypes.instanceOf(Immutable.Map).isRequired,
  goalScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  overallGdd: PropTypes.number.isRequired,
  gddValues: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Results;
