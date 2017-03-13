# React Native maformvalidation #
[![npm version](https://badge.fury.io/js/react-native-forms.svg)](https://badge.fury.io/js/react-native-forms)
[![Build Status](https://travis-ci.org/michaelhelvey/react-native-forms.svg?branch=master)](https://travis-ci.org/michaelhelvey/react-native-forms)

React Native maformvalidation is a cross-platform library for validating forms using [React Native](https://github.com/facebook/react-native).

<a name='Installation'></a>
## Installation ##
`npm install @malsapp/react-native-maformvalidation --save`

<a name='SetUp Validation functions and Regex'></a>
## Example ##
`const rules = {
  email: /[a-z0-9!#$%&'/=?^_`{|}~-](?:.[a-z0-9!#$%&'/=?^_`{|}~-])@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  
  password: value => !value || value.length < 6,
  
  phone: /^\d{7,}$/,
  
  required: value => !value || value.length === 0,
  
  equals: target => value => !value || value !== target,
  
  isYouTube: /^((?:https?:)?//)?((?:www|m)\.)?((?:youtube.com|youtu.be))(/(?:[\w-]+?v=|embed/|v/)?)([\w-]+)(\S+)?$/,
  
};`

<a name='Apply Validation rules on fields'></a>
## Example ##
`<View style={styles.container}>
        <Form ref={ref => (this.form = ref)}>
          {/* Email Input) */}
          <FormLabel labelStyle={styles.alignText}>{I18n.t('login')}</FormLabel>
          <FormInput
            inputStyle={styles.alignText}
            placeholder="email@domain.com"
            textInputRef={email => (this.email = email)}
          />
          <FormValidator
            value={() => (this.email._lastNativeText)}
          >
            <Rule textStyle={styles.error} message="Not Found" rule={Rule.required} />
            <Rule textStyle={styles.error} message="Not Email" rule={Rule.email} />
          </FormValidator>

          {/* Password Input) */}
          <FormLabel labelStyle={styles.alignText}>{I18n.t('password')}</FormLabel>
          <FormInput
            inputStyle={styles.alignText}
            placeholder="********"
            secureTextEntry
          />
          <FormLabel labelStyle={styles.error}>{I18n.t('login')}</FormLabel>

          <Button
            buttonStyle={styles.forgotPasswordButton}
            textStyle={styles.forgotPasswordText}
            title={I18n.t('forgot-password')}
          />

          <Button
            buttonStyle={styles.loginButton}
            title={I18n.t('login')}
            raised
            onPress={() => this.form.validate()}
          />
        </Form>

      </View>
