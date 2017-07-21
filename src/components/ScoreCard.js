import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

import '../style/score-card.scss';

class ScoreCard extends React.Component {
  render() {
    const {
      name,
      numerator,
      denominator,
      tooltipText
     } = this.props;

    return (
      <div className={"score-card " + this.props.className}>
        <h4 className="name">{ name }</h4>
        <Tooltip
          text={tooltipText}
          id={"score-card" + name}
        />
        <p className="numerator">{ numerator }</p>
        <p className="denominator">{ "/" + String(denominator) }</p>
      </div>
    );
  }
}

ScoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
  numerator: PropTypes.number.isRequired,
  denominator: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default ScoreCard;
