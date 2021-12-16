import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
//import { Context as AuthContext } from '../context/AuthContext';

const AuthForm = ( { headerText, errorMessage, submitBtnText, onSubmit } ) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  //console.log( state );

  // Could instead use onChangeText={ setEmail } below
  return(
    <>
      <Spacer>
        <Text h4>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={ ( newEmail ) => setEmail( newEmail ) }
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={ (newPwd) => { setPassword( newPwd ) } }
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
      { errorMessage ? <Text style={ styles.errMsg }>{ errorMessage }</Text> : null }
        <Button
          title={submitBtnText}
          onPress={ () => onSubmit({ email, password }) }
        />
      </Spacer>
    </>
  );
};

// SignupScreen.navigationOptions = () => {
//   return {
//     headerShown: false
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 30
  },
  errMsg: {
    margin: 15,
    fontSize: 16,
    color: 'red'
  },
  signin: {
    color: 'blue'
  }
});

export default AuthForm;
