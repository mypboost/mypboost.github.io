import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

import '../style/form-element.scss';

class FormElement extends React.Component {

  childrenWithProps(){
    const { children, onFieldUpdate, placeholder, currentValue, fieldName } = this.props
    return React.Children.map(children,
     (child) => React.cloneElement(child, {
        onFieldUpdate,
        placeholder,
        currentValue,
        fieldName 
     })
    );
  }

  render() {
    const { fieldTitle, info, id, className } = this.props
    return (
      <div className={"form-element " + className}>
        <div className="info">
          <p className="field-title">{fieldTitle}</p>
          <Tooltip text={info} id={id} />
        </div>
          {this.childrenWithProps()}
      </div>
    )
  }
}

FormElement.propTypes = {
  fieldName: PropTypes.string,
  info: PropTypes.string,
  fieldTitle: PropTypes.string,
  placeholder: PropTypes.string,
  currentValue: PropTypes.string,
  onFieldUpdate: PropTypes.func,
  className: PropTypes.string
}

export default FormElement;
