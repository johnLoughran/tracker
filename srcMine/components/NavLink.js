import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
//import { Context as AuthContext } from '../context/AuthContext';

const NavLink = ( { navigation, navBtnText, routeName } ) => {

  return (
    <Spacer>
      <TouchableOpacity
        onPress={ () => navigation.navigate( routeName ) }
      >
        <Text
          style={styles.sign}
        >
          {navBtnText}
        </Text>
      </TouchableOpacity>
    </Spacer>
  );

};

const styles = StyleSheet.create({
  sign: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);
