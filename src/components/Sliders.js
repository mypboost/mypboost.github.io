import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Immutable from 'immutable';

// import '../style/slider.scss';

class Sliders extends React.Component {

  getRow(name, value) {
    const minValue = 0;
    const maxValue = 1000;


    return (
      <Slider
        key={name}
        name={name}
        minValue={minValue}
        maxValue={maxValue}
        value={value}
      />
    )
  }

  render() {

    let rows = Immutable.List([])

    this.props.sliders.forEach((slider) => {
      rows = rows.push(this.getRow(slider.name, slider.value));

    })

    return (
      <div>
        {rows}
      </div>
    )
  }
}

export default Sliders;
