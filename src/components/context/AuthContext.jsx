import React, { useContext, useEffect, useState } from "react";
import auth from "../authentication/firebase";
import { getAuth } from "firebase/auth";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  function signup({ password, email }) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login({ email, password }) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    let auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
