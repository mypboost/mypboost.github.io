import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import '../style/focus-on.scss';

class FocusOn extends React.Component {

  threeLargestGulfs(){
    const { goalSliders, currentSliders } = this.props;

    const results = currentSliders.reduce((reduction, value, key) => {
      if (key === "Overall Happiness") return reduction;
      const currentValue = value.get('value');
      const goalValue = goalSliders.getIn([key, 'value']);
      return reduction.set(key, goalValue - currentValue);
    }, Immutable.OrderedMap());

    return results.sort().reverse().slice(0, 3);
  }

  renderIcon(fieldName) {
    let pathName = './assets/thumb-prints/';
    let color;

    switch(fieldName) {
      case "Physical Health & Fitness":
        pathName += "physical_health-purple.png"
        color = "purple";
        break
      case "Mental Health & Wellbeing":
        pathName += "mental_health-yellow.png"
        color = "yellow";
        break
      case "Family & Friends":
        pathName += "family-pink.png"
        color = "pink";
        break
      case "Career & Work/Life Balance":
        pathName += "career-orange.png"
        color = "orange";
        break
      case "Wealth & Financial Wellbeing":
        pathName += "wealth-red.png"
        color = "red";
        break
      case "Self Actualization":
        pathName += "self_actualisation-blue.png"
        color = "blue";
        break
    }

    return (
      <div className={ "focus-on-icon " + color } key={ fieldName }>
        <img src={ pathName } />
        <p>{ fieldName }</p>
      </div>
    );
  }

  renderIcons() {
    return this.threeLargestGulfs().reduce((reduction, value, key) => { 
      reduction.push(this.renderIcon(key))
      return reduction
    }, [])
  }

  render(){
    const icons = this.renderIcons()
    return (
      <div className="focus-on-icons">
        { icons }
      </div>
    );
  }

}

FocusOn.propTypes = {
  currentSliders: PropTypes.instanceOf(Immutable.Map).isRequired,
  goalSliders: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default FocusOn;
