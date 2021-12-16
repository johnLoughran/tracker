import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ( { navigation } ) => {
  const { state, signup } = useContext( AuthContext );

  console.log( "From SignupScreen: " );
  console.log( state );

  return(
    <View style={ styles.container }>
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        submitBtnText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        navBtnText="Already have an account? Sign In instead!"
        routeName="Signin"
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
});

export default SignupScreen;
