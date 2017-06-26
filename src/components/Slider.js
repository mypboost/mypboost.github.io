import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';

import '../style/slider.scss';

class Slider extends React.Component {

  setValue(newValue) {
    this.props.onSliderChange(this.props.group, this.props.name, newValue);
  }

  render() {
    let {name, value, minValue, maxValue, className} = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <p>{value}/{maxValue}</p>
        <ReactSlider
          withBars
          min={minValue}
          max={maxValue}
          defaultValue={value}
          onChange={this.setValue.bind(this)}
          className={"slider " + className}
        />
      </div>
    )
  }
}

Slider.propTypes = {
  onSliderChange: PropTypes.func,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Slider;
