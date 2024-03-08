// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(() => localStorage.getItem("Token"));
//   const [user, setUsers] = useState(null); // Initialize user as null
//   const [loading, setIsLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     handleStorageChange();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       userAuthenctication();
//     } else {
//       setUsers(null); // Reset user when token is empty
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
//         setUsers(userData);
//       }
//     } catch (error) {
//       console.log("Error during user authentication:", error);
//     } finally {
//       setIsLoading(false); // Update loading state after user data is fetched
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, user }}
//     >
//       {!loading && children} {/* Render children only when loading is false */}
//     </AuthContext.Provider>
//   );setUserss
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };









// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [Token, setToken] = useState(() => localStorage.getItem("Token")); // Use "getItem()" for Remove or get your Saved or Store Token from LocalStorge
//   const [users, setUsers] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//  const authoritionToken = `Bearer ${Token}`;
//   useEffect(() => {
//     handleStorageChange();
//   },[]);

  
// const responseFetch = async (Token) => {
//   try {
//     setIsLoading(true);
//     const response = await fetch("http://localhost:5000/api/v1/userdata", {
//       method: "GET",
//       headers: {
//         Authorization: authoritionToken ,
//       },
//     });
    
//     if (response.ok) {
//       const user = await response.json();
//       console.log("Wwwww",user);
//       console.log("Wwwww2222",user.userData.isAdmin);
//       setUsers(user)
//       setIsLoading(false);
//       // return user; // Return the user data
//     } else {
//       throw new Error("Response not okay");
//     } 
//     setIsLoading(false);
    
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     setIsLoading(false);
//   }
// };

// useEffect(() => {
//   userAuthenctication();
// }, []);

// useEffect(() => {
//   responseFetch(Token) // Pass Token as an argument to responseFetch
  
// }, [Token]);


// const handleStorageChange = () => {
//     setToken(localStorage.getItem("Token"));
//   };

//   const storeTokenInLocalStorage = (serverToken) => {
//     localStorage.setItem("Token", serverToken); // Use "setItem()" for Store your Token on LocalStorge
//     setToken(serverToken);
//   };

//   const isLoggedIn = !!Token;
//   console.log("isLoggedIn :", isLoggedIn);
//   console.log("TOken State :", Token);

//   const LogoutUser = () => {
//     localStorage.removeItem("Token");
//     setToken("");
//   };

//   //Edit a user
//   const editUserById=async(id)=>{ }



// const userAuthenctication = async () => {
//   try {
//     const user = await responseFetch(Token); // Call responseFetch with Token
//     setUsers(user); // Update state with user data
//   } catch (error) {
//     console.log(
//       "Error DUring Fetching, Inside 'userAuthenctication' of AuthController ",
//       error
//     );
//   }
// };

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn,isLoading, users, storeTokenInLocalStorage, LogoutUser ,authoritionToken, editUserById }}//Color of Function Show differntlly--->"Yellow Color"
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };





import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("Token"));
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authoritionToken = `Bearer ${token}`;

  useEffect(() => {
    handleStorageChange();
  }, []);

  useEffect(() => {
    if (token) {
      responseFetch(token);
    }
  }, [token]);

  const responseFetch = async (token) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/userdata", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUsers(userData);
        setIsLoading(false);
      } else {
        throw new Error("Response not okay");
      } 
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleStorageChange = () => {
    setToken(localStorage.getItem("Token"));
  };

  const storeTokenInLocalStorage = (serverToken) => {
    localStorage.setItem("Token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  const logoutUser = () => {
    localStorage.removeItem("Token");
    setToken("");
    setUsers(null); // Reset users state on logout
  };

  const editUserById = async (id) => {
    // Implement edit user functionality
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, users, storeTokenInLocalStorage, logoutUser, authoritionToken, editUserById }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
