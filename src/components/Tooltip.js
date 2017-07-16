import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import '../style/tooltip.scss';

class Tooltip extends React.Component {
  getTooltip(id, text) {
    return (
      <div className="tooltip">
        <i
          data-tip='custom show'
          data-event='click focus'
          data-for={id}
          className="fa fa-info-circle tooltip-icon"
        >
        </i>
        <ReactTooltip id={id} type='light' effect='solid'>
          <span>{text}</span>
        </ReactTooltip>
      </div>
    );
  }

  render() {
    const { id, text } = this.props;
    return (
      text ? this.getTooltip(id, text) : null
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string
};

export default Tooltip;
