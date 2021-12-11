import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ( { navigation } ) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

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
        <Button
          title="Sign Up"
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
  }
});

export default SignupScreen;
