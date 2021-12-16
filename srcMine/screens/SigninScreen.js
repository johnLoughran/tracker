import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ( { navigation } ) => {
  const { state, signin } = useContext( AuthContext );

  console.log( "From SigninScreen: " );
  console.log( state );

  return(
    <View style={ styles.container }>
      <AuthForm
        headerText="Sign In To Tracker"
        errorMessage={ state.errorMessage }
        submitBtnText="Sign In"
        onSubmit={ signin }
      />
      <NavLink
        navBtnText="Don't have an account? Go to Sign Up!"
        routeName="Signup"
      />
    </View>
  );

};

// return(
//  <View>
//   <Spacer>
//     <Text>SigninScreen</Text>
//   </Spacer>
//     <Button
//       title="Go to Sign Up"
//       onPress={ () => navigation.navigate('Signup') }
//     />
//     <Button
//      title="Main Flow"
//      onPress={ () => navigation.navigate('mainFlow')}
//     />
//  </View>
// );

SigninScreen.navigationOptions = {
    headerShown: false
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 30
  },
});

export default SigninScreen;
