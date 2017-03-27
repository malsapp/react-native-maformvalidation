import React from 'react';
import {
  View,
} from 'react-native';

import _ from 'lodash';

class Form extends React.Component {

  static propTypes = {
    children: React.PropTypes.arrayOf(React.Component).isRequired,
  };

  constructor(props) {
    super(props);
  }

  validatorRefs = [];

  validate() {
    return this.validatorRefs.every(item => item.validate());
  }

  addRef = (ref, type) => {
    if (type.name === 'FormValidator' && ref && ref.validate) {
      this.validatorRefs.push(ref);
    }
  }

  clearRefs = () => {
    this.validatorRefs = [];
  }

  render() {
    this.clearRefs();
    return (<View>
      {this.props.children.map((Child, index) => <Child.type
        key={`Child${index}`}
        {...Child.props}
        ref={ref => this.addRef(ref, Child.type)}
      />)}
    </View>);
  }
}

export default Form;
