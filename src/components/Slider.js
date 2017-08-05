import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';

class Slider extends React.Component {

  setValue(newValue) {
    this.props.onSliderChange(this.props.group, this.props.name, newValue);
  }

  render() {
    let {name, value, minValue, maxValue, className} = this.props;

    return (
      <div className="slider-container">
        <h4 className="slider-title">{name}</h4>
        <p className="slider-number">
          {value}
          <span className="denominator">/{maxValue}</span>
        </p>
        <ReactSlider
          withBars
          min={minValue}
          max={maxValue}
          defaultValue={value}
          onChange={this.setValue.bind(this)}
          className={"slider " + className + "-slider"}
          step={10}
        />
      </div>
    );
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
};

export default Slider;
