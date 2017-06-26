import React from 'react';
import PropTypes from 'prop-types';

class FormElement extends React.Component {

  render() {
    
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       placeholder: this.props.name
     })
    );
    
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.info}</p>
        {childrenWithProps}
      </div>
    )
  }
}

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string
}

export default FormElement;
