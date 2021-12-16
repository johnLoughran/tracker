import React, { useReducer } from 'react';

// export the default function when createDataContext is called, that takes as args
// the reducer, the actions and a default value
export default ( reducer, actions, defaultValue ) => {
  // create a react Context
  const Context = React.createContext();

  // make a Provider that takes children as args
  const Provider = ( { children } ) => {
    // extract state and dispatch from useReducer which takes reducer and defVal
    const [ state, dispatch ] = useReducer( reducer, defaultValue );

    // make a boundActions object that foreach action calls action(dispatch)
    const boundActions = {};
    for( let key in actions ) {
      boundActions[ key ] = actions[ key ]( dispatch );
    }

    // return the context.provider as jsx with a value of an object
    // containing the state and the boundActions
    return (
      <Context.Provider value={ { state, ...boundActions } } >
        { children }
      </Context.Provider>
    );
  };
  // return the object containing the context and provider
  return { Context: Context, Provider: Provider };
  // can also just write: return { Context, Provider };
};
