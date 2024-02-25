// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(() => localStorage.getItem("Token"));
//   const [user, setUser] = useState(null); // Initialize user as null
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     handleStorageChange();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       userAuthenctication();
//     } else {
//       setUser(null); // Reset user when token is empty
//     }
//   }, [token]); // Trigger user authentication when token changes

//   const handleStorageChange = () => {
//     setToken(localStorage.getItem("Token"));// Use "getItem()" for Remove or get your Saved or Store Token from LocalStorge
//   };

//   const storeTokenInLocalStorage = (serverToken) => {
//     localStorage.setItem("Token", serverToken);// Use "setItem()" for Store your Token on LocalStorge
//     setToken(serverToken);
//   };

//   const isLoggedIn = !!token;

//   const LogoutUser = () => {
//     localStorage.removeItem("Token");
//     setToken("");
//   };

//   const userAuthenctication = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/v1/userdata", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData);
//       }
//     } catch (error) {
//       console.log("Error during user authentication:", error);
//     } finally {
//       setLoading(false); // Update loading state after user data is fetched
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, user }}
//     >
//       {!loading && children} {/* Render children only when loading is false */}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(() => localStorage.getItem("Token")); // Use "getItem()" for Remove or get your Saved or Store Token from LocalStorge
  const [user, setUser] = useState("");

  useEffect(() => {
    handleStorageChange();
  },[]);


const responseFetch = async (Token) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/userdata", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    
    if (response.ok) {
      const user = await response.json();
      setUser(user)
      // return user; // Return the user data
    } else {
      throw new Error("Response not okay");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  userAuthenctication();
}, []);

useEffect(() => {
  responseFetch(Token) // Pass Token as an argument to responseFetch
    // .then(user => setUser(user)) // Update state with user data
    // .catch(error => console.error("Error setting user data:", error));
}, [Token]);


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


const userAuthenctication = async () => {
  try {
    const user = await responseFetch(Token); // Call responseFetch with Token
    setUser(user); // Update state with user data
  } catch (error) {
    console.log(
      "Error DUring Fetching, Inside 'userAuthenctication' of AuthController ",
      error
    );
  }
};

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
