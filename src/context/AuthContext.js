// allow this to use the code in createDataContext
import createDataContext from './createDataContext';

// make a reducer fn which takes state and action and uses a switch to decide what to do
const authReducer = ( state, action ) => {
  switch( action.type ) {
    default:
      return state;
  }
};

const signup = ( dispatch ) => {
  return({ email, password }) => {
    // Try to sign up

    // Handle success by updating state

    // Handle failure with error msg
  };
};
const signin = ( dispatch ) => {
  return({ email, password }) => {
    // Try to sign in

    // Handle success by updating state

    // Handle failure with error msg
  };
};
const signout = ( dispatch ) => {
  return () => {
    // Try to sign out

    // Handle failure with error msg
  };
};

// export the Provider Context object made from createDataContext with 3 args,
// the reducer, an empty object (fill later) and a flag object
export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
