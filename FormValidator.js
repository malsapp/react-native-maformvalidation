import React from 'react';
import {
  View,
  Text,
} from 'react-native';

class FormValidator extends React.Component {

  state = {
    valid: true,
  }

  validatorRefs = [];
  
  addRef = (ref, type) => {
    if (type.name === 'Rule' && ref) {
      this.validatorRefs.push(ref);
    }
  }

  validate() {
    let hasError = false;
    this.validatorRefs.forEach((rule) => {
      if(rule.hasError(this.props.value)) {
        hasError = true;
      }
    });

    return !hasError;
  }

  render() {
    return (<View>
      {this.props.children.map((Child, index) => <Child.type
        key={`Child${index}`}
        {...Child.props}
        ref={ref => this.addRef(ref, Child.type)}
      />)}
    </View>);
  }
}

export default FormValidator;
