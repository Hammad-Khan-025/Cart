import React, { useState, useContext, useReducer, useEffect } from "react";
import data from "./Data";
import reducer from "./Reducer";
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 4,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payLoad: id})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
