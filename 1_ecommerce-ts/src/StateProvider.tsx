import React, { createContext, useContext, useReducer } from "react"

//prepare datalayer
export const StateContext = createContext({}) as any;

//wrap our app and provide the data layer
export const StateProvider = (props: any) => {
  const { reducer, initialState, children} = props;
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
  );
}

// pullinfo fromthe data layer
export const useStateValue = () => useContext(StateContext)