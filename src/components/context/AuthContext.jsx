import React, { useContext, useEffect, useState } from "react";
import auth from "../authentication/firebase";
import { getAuth } from "firebase/auth";

export const AuthContext = React.createContext(null);

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  function signup(
   { firstName,
    lastName,
    password,
    accountType,
    agreement,
    email}
  ) {
    return auth.createUser(
      email,
      password
    );
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
  };
 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
