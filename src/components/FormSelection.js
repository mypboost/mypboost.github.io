import React from 'react';
import PropTypes from 'prop-types';
import FormSelector from './FormSelector';

import '../style/form-selection.scss';

class FormSelection extends React.Component {

  createSelector(option) {
    const { onFieldUpdate, currentValue, fieldName } = this.props;
    return (
      <FormSelector
        key={option}
        currentValue={currentValue}
        onFieldUpdate={onFieldUpdate}
        fieldName={fieldName}
        option={option}
      />
    )
  }
  
  getSelectors(){
    let selectors = [];
    for (let option of this.props.options){
      selectors.push(this.createSelector(option));
    }

    return selectors;
  }

  render(){
    return(
      <div className="form-selection">
        {this.getSelectors()}
      </div>
    )
  }
}

FormSelection.propTypes = {
  fieldName: PropTypes.string,
  info: PropTypes.string,
  fieldTitle: PropTypes.string,
  currentValue: PropTypes.string,
  onFieldUpdate: PropTypes.func,
  options: PropTypes.array
}

export default FormSelection;
