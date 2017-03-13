# React Native maformvalidation #
[![npm version](https://badge.fury.io/js/react-native-maformvalidation.svg)](https://badge.fury.io/js/react-native-maformvalidation)

React Native maformvalidation is a cross-platform library for validating forms using [React Native](https://github.com/facebook/react-native).

<a name='Installation'></a>
## Installation ##
```
npm install --save @malsapp/react-native-maformvalidation 
OR
yarn add @malsapp/react-native-maformvalidation 
```

## Components

###Form
#####Encapsulate all form elements 
#### Functions
Function | Description
------------ | -------------
validate | Return `True` in case of valid form



###FormValidator
#####Validate Values and contain Rules component  
#### Properties
Prop | Description
------------ | -------------
value | ```Value(String || Function ) : Get value for validation  ```



###Rule
#####Validation Rules and styles  
#### Properties
Prop | Description
------------ | -------------
textStyle | Style the error message
message |  Text of error message
rule | (Built-in || function that takes the value and return ``true`` if invalid || Regex) Validation rule


## Built-in Rules
Rule | Description
------------ | -------------
email | Check if the value is valid Email or not 
password | Make sure password is more than 6 characters
required | Check if there is a value in the field or not
isYouTube | Check if URL is valid youtube link or not






<a name='Apply Validation rules on fields'></a>
## Apply Validation rules on fields: Example ##
```
<Form ref={ref => (this.form = ref)}> 

    {/* Email Input) */}
    <Text>Email</Text>
    <TextField placeholder="email@domain.com" onChangeText={email => this.setState({ email })} />
    <FormValidator value={this.state.email}>
        <Rule textStyle={styles.error} message="Email is required" rule={Rule.required} />
        <Rule textStyle={styles.error} message="Not valid email" rule={Rule.email} />
    </FormValidator>

    {/* Password Input) */}
    <Text>Password</Text>
    <Text placeholder="********" secureTextEntry onChangeText={password => this.setState({ password })} />
    <FormValidator>
        <Rule textStyle={styles.error} message="Password is required" rule={Rule.required} />
        <Rule textStyle={styles.error} message="Password must be 6+ charecters" rule={Rule.password} />
    </FormValidator>

    <Button title="login" onPress={() => this.form.validate()}/>
</Form>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
