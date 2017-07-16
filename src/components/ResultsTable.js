import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import '../style/results-table.scss';

class ResultsTable extends React.Component {

  createRow(className, name, column1, column2, column3) {
    return (
      <div className={"row " + className + "-row"} key={name}>
       <p className={"name " + className + "-name"}>{name}</p>
       <p className="column column1">{column1}</p>
       <p className="column column2">{column2}</p>
       <p className="column column3">{column3}</p>
      </div>
    );
  }

  rows(currentSliders, goalSliders){
    let rows = [];

    currentSliders.forEach((currentParameters, sliderName) => {
      const goalValue = goalSliders.getIn([sliderName, "value"]);
      const currentValue = currentParameters.get("value");
      const className = currentParameters.get("className");
      const gdd = "1000";
      rows.push(this.createRow(className, sliderName, gdd, currentValue, goalValue));
    });

    return rows;
  }

  render(){
    return (
      <div className="results-table">
        {this.createRow("title", "MYP BIG6 Life Dimensions", "GDD", "Current", "Goal" )}
        {this.rows(this.props.currentSliders, this.props.goalSliders)}
      </div>
    );
  }
}

ResultsTable.propTypes = {
  currentSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  goalSliders: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default ResultsTable;
