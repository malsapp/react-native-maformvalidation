import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import _ from 'lodash';

const rules = {
  email: /[a-z0-9!#$%&'*/=?^_`{|}~-](?:\.[a-z0-9!#$%&'*/=?^_`{|}~-])*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  password: value => !value || value.length < 6,
  phone: /^\d{7,}$/,
  required: value => !value || value.length === 0,
  equals: target => value => !value || value !== target,
  isYouTube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube.com|youtu.be))(\/(?:[\w-]+?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/,
};

class Rule extends React.Component {

  state = {
    hasError: false,
  }
  notValid = (validator, value) => {
    if (validator.toString()[0] === '/') {
      return !validator.test(value);
    } else if (_.isFunction(validator)) {
      return validator(value);
    }
    return null;
  }

  hasError(value) {
    let $value;
    if (_.isFunction(value)) {
      $value = value();
    } else {
      $value = value;
    }

    let hasError = false;
    const rule = this.props.rule;
    if (_.isFunction(rule) || rule.toString()[0] === '/') {
      hasError = this.notValid(rule, $value);
    }

    this.setState({
      hasError,
    });

    return hasError;
  }

  render() {
    return (<View style={this.props.containerStyle}>
      {this.state.hasError && <Text style={this.props.textStyle}>{this.props.message}</Text>}
    </View>);
  }
}

Object.keys(rules).forEach(rule => Rule[rule] = rules[rule]);

export default Rule;
