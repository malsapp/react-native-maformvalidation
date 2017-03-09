import React from 'react';
import {
  View,
} from 'react-native';

class Form extends React.Component {

  static propTypes = {
    children: React.PropTypes.arrayOf(React.Component).isRequired,
  };

  constructor(props) {
    super(props);
  }

  validatorRefs = [];

  validate() {
    this.validatorRefs.map(item => item.validate());
  }

  addRef = (ref, type) => {
    if (type.name === 'FormValidator') {
      this.validatorRefs.push(ref);
    }
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

export default Form;
