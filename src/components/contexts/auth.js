import React, { createContext, useReducer } from "react";

const AuthContext = createContext({
  signed: false,
  user: {},
});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ signed, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
