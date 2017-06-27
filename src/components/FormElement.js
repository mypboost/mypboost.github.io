import React from 'react';
import PropTypes from 'prop-types';

class FormElement extends React.Component {
  render() {
    const {
      fieldTitle, 
      info, 
      component, 
      onFieldUpdate, 
      placeholder, 
      value,
      name
    } = this.props

    return (
      <div>
        <h3>{fieldTitle}</h3>
        <p>{info}</p>
        {React.cloneElement(component, {
          onFieldUpdate,
          placeholder,
          value,
          name 
        })}
      </div>
    )
  }
}

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  component: PropTypes.element.isRequired,
  fieldTitle: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onFieldUpdate: PropTypes.func.isRequired
}

export default FormElement;
