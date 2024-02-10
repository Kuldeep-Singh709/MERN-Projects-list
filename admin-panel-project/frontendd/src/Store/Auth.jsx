import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(() => localStorage.getItem("Token"));// Use "getItem()" for Remove or get your Saved or Store Token from LocalStorge

  useEffect(() => {
    handleStorageChange();
  }, []);

  const handleStorageChange = () => {
    setToken(localStorage.getItem("Token"));
  };

  const storeTokenInLocalStorage = (serverToken) => {
    localStorage.setItem("Token", serverToken); // Use "setItem()" for Store your Token on LocalStorge
    setToken(serverToken);
  };

  const isLoggedIn = !!Token;
console.log("isLoggedIn :", isLoggedIn);
console.log("TOken State :", Token);

  const LogoutUser = () => {
    localStorage.removeItem("Token");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
