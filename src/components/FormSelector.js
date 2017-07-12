import React from 'react';
import PropTypes from 'prop-types';

class FormSelector extends React.Component {
  
  onSelection(event){
    const { fieldName, option } = this.props 
    this.props.onFieldUpdate(fieldName, option)
  }

  render(){
    const { currentValue, option } = this.props
    const selectedClass = currentValue === option ? "form-selector-selected" : ""
    return(
      <a
        className = {"form-selector " + selectedClass}
        onClick={this.onSelection.bind(this)}
      >
        {option}
      </a>
    )
  }
}

FormSelector.propTypes = {
  fieldName: PropTypes.string,
  info: PropTypes.string,
  fieldTitle: PropTypes.string,
  placeholder: PropTypes.string,
  currentValue: PropTypes.string,
  onFieldUpdate: PropTypes.func
}

export default FormSelector;
