import React from 'react';
import PropTypes from 'prop-types';
import Page from './page'

class Results extends React.Component {

  createRow(currentValue, goalValue, name) {

    return (
      <p key={name}>
       {name}<br />
       current: {currentValue.get("value")}<br />
       goal: {goalValue.get("value")}<br />
      </p>
    )
  }

  rows(currentSliders, goalSliders){
    let rows = []

    currentSliders.forEach((currentValue, key) => {
      const goalValue = goalSliders.get(key)
      rows.push(this.createRow(currentValue, goalValue, key));
    })

    return rows;
  }

  render(){
    const { name, age, sex, email } = this.props.fields.toJS()
    return (
      <Page>
        <h2 className="large-header">Your MYPCO Lite Score</h2> 
        <p className="body form-intro-text"> 
          It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout. The point of 
          using Lorem Ipsum is that it has a more-or-less normal distribution 
        </p>

        <p>name: {name.value}</p>
        <p>age: {age.value}</p>
        <p>sex: {sex.value}</p>
        <p>email: {email.value}</p>
        {this.rows(this.props.currentSliders, this.props.goalSliders)}
      </Page>
    )
  }

}

export default Results
