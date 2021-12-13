// allow this to use the code in createDataContext
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

// make a reducer fn which takes state and action and uses a switch to decide what to do
const authReducer = ( state, action ) => {
  switch( action.type ) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
      // returns a brand new state object with all old elements but errorMessage updated..
    default:
      return state;
  }
};

const signup = ( dispatch ) => {
  return async ({ email, password }) => {
    // Try to sign up
    try {
      const response = await trackerApi.post('/signup', { email, password } );
      console.log( response.data );
    }
    catch (err) {
      console.log( err.message );
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up (Error could be improved)'});
      // now need to add this type to the authReducer method above
    }

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
// SG calls the third arg below the state object, updated it to include a blank err msg
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: '' }
);
