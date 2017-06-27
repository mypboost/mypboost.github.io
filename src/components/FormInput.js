import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  onFieldUpdate(event){
    const { value, name } = event.target
    this.props.onFieldUpdate(name, value)
  }

  render() {
    const { name, value, placeholder } = this.props
    return (
      <input 
        placeholder={placeholder}
        onChange={this.onFieldUpdate.bind(this)}
        value={value}
        name={name}
      />
    )
  }
}

FormInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,

}

export default FormInput;
