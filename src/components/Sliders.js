import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Immutable from 'immutable';

import '../style/sliders.scss';

class Sliders extends React.Component {

  createRow(values, name) {
    const minValue = 0;
    const maxValue = 1000;

    return (
      <Slider
        key={name}
        name={name}
        minValue={minValue}
        maxValue={maxValue}
        value={values.get("value")}
        className={values.get("className")}
        onSliderChange={this.props.onSliderUpdate}
        group={this.props.group}
      />
    )
  }

  rows(sliders){
    let rows = Immutable.List([])

    sliders.forEach((value, key) => {
      rows = rows.push(this.createRow(value, key));
    })

    return rows;
  }



  render() {
    return (
      <div className="sliders">
        {this.rows(this.props.sliders)}
      </div>
    )
  }
}

export default Sliders;
