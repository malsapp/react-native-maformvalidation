# React Native maformvalidation #
[![npm version](https://badge.fury.io/js/react-native-maformvalidation.svg)](https://badge.fury.io/js/react-native-maformvalidation)

React Native maformvalidation is a cross-platform library for validating forms using [React Native](https://github.com/facebook/react-native).

<a name='Installation'></a>
## Installation ##
```
npm install --save @malsapp/react-native-maformvalidation 
OR
yern install --save @malsapp/react-native-maformvalidation 
```

## Components
Component | Description
------------ | -------------
Form | Encapsulate all form elements 
FormValidator | Validate Vlues and contain Rules component 
Rule | Give a message and style for specific validation rule 

## Properties
Component | Props
------------ | -------------
FormValidator | ```Value(String || Function ) : Get value for validation  ```
Rule | ```textStyle : Style the error message , message = Text of error message ,rule = Validation rule (BuiltIn || function || Regex)```

## BuiltIn Rules
Rule | Description
------------ | -------------
email | Check if value is valide Email or not 
password | Make sure password is more than 6 characters
required | Check if there is a value in the field or not
isYouTube | Check if url is valid youtube link or not



<a name='SetUp Validation functions and Regex'></a>
## SetUp Validation functions and Regex: Example ##
```
const rules = {
  email: /[a-z0-9!#$%&'/=?^_`{|}~-](?:.[a-z0-9!#$%&'/=?^_`{|}~-])@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  password: value => !value || value.length < 6,
  phone: /^\d{7,}$/,
  required: value => !value || value.length === 0,
  equals: target => value => !value || value !== target,
  isYouTube: /^((?:https?:)?//)?((?:www|m)\.)?((?:youtube.com|youtu.be))(/(?:[\w-]+?v=|embed/|v/)?)([\w-]+)(\S+)?$/, 
};
```

<a name='Apply Validation rules on fields'></a>
## Apply Validation rules on fields: Example ##
```
<View style={styles.container}>
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
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
