import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  onFieldUpdate(event){
    const { value, name } = event.target
    this.props.onFieldUpdate(name, value)
  }

  render() {
    const { fieldName, currentValue, placeholder } = this.props
    return (
      <input 
        placeholder={placeholder}
        onChange={this.onFieldUpdate.bind(this)}
        value={currentValue}
        name={fieldName}
      />
    )
  }
}

FormInput.propTypes = {
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,

}

export default FormInput;
