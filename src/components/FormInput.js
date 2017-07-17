import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  onFieldUpdate(event){
    const { value, name } = event.target;
    this.props.onFieldUpdate(name, value);
  }

  onFieldBlur(event){
    const { value, name } = event.target;
    this.props.onFieldBlur(name, value);
  }

  render() {
    const { fieldName, currentValue, placeholder } = this.props;
    return (
      <input
        placeholder={placeholder}
        onChange={this.onFieldUpdate.bind(this)}
        onBlur={this.onFieldBlur.bind(this)}
        value={currentValue}
        name={fieldName}
      />
    );
  }
}

FormInput.propTypes = {
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onFieldUpdate: PropTypes.func,
  onFieldBlur: PropTypes.func,
  currentValue: PropTypes.string
};

export default FormInput;
