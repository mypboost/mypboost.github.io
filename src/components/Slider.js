import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';

import '../style/slider.scss';

class Slider extends React.Component {

  setValue(newValue) {
    //
  }

  render() {
    let {name, value} = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <ReactSlider
          withBars
          min={0}
          max={1000}
          defaultValue={value}
          onChange={this.setValue}
        />
      </div>
    )
  }
}

Slider.propTypes = {
  changeSliderValue: PropTypes.func,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Slider;
