import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const InitialState = { adminEmail: null };
  function reducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        return { ...state, adminEmail: action.payload };
      case "LOGOUT":
        return { ...state, adminEmail: null };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
