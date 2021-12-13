import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ( { navigation } ) => {
  const { state, signup } = useContext( AuthContext );
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  console.log( state );

  // Could instead use onChangeText={ setEmail } belwo
  return(
    <View style={ styles.container }>
      <Spacer>
        <Text h4>Sign Up For Tracker</Text>
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
      { state.errorMessage ? <Text style={ styles.errMsg }>{ state.errorMessage }</Text> : null }
        <Button
          title="Sign Up"
          onPress={ () => signup({ email, password }) }
        />
      </Spacer>
      <Button
        title="Go to Sign In"
        onPress={ () => navigation.navigate('Signin') }
      />
    </View>
  );
};

// SignupScreen.navigationOptions = () => {
//   return {
//     headerShown: false
//   };
// };

// could also write as an object instead of a fn as we do not need an arg of nav'n
SignupScreen.navigationOptions = {
    headerShown: false
};

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
  }
});

export default SignupScreen;
