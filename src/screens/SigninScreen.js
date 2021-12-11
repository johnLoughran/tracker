import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Spacer from '../components/Spacer';

const SigninScreen = ( { navigation } ) => {
  return(
   <View>
    <Spacer>
      <Text>SigninScreen</Text>
    </Spacer>
      <Button
        title="Go to Sign Up"
        onPress={ () => navigation.navigate('Signup') }
      />
      <Button
       title="Main Flow"
       onPress={ () => navigation.navigate('mainFlow')}
      />
   </View>
  );
};

const styles = StyleSheet.create({

});

export default SigninScreen;
