import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Store/Auth";


// export const Logout=()=>{

export default function Logout() {
  const { LogoutUser } = useAuth();
  console.log("Inside Logout FUnction");
  useEffect(() => {
  console.log("Inside Logout FUnction222");

    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
  // (
  //   <>
  //   < Navigate to={"/login"}/>
  //   {console.log("Succesfully Logout")}
  //   </>
  // )
}
// navigate("/login");



 