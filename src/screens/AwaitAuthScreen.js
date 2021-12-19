import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const AwaitAuthScreen = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect( () => {
    tryLocalSignin();
  }, [] );

  console.log(state);

  return null;
};

export default AwaitAuthScreen;
