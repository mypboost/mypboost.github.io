import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import Page from './Page';
import ResultsTable from './ResultsTable';

class Results extends React.Component {

  render(){
    const { currentSliders, goalSliders } = this.props;
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
