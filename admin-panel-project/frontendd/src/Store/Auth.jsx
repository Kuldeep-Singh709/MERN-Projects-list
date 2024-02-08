import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storeTokeninLocalStorage = (serverToken) => {
        return localStorage.setItem("Token", serverToken);
    };

    return (
        <AuthContext.Provider value={{ storeTokeninLocalStorage }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};


// storeTokeninLocalStorage