import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import { toast } from 'react-toastify';



// export const Logout=()=>{

export default function Logout() {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
    toast.info("Successfully Logged out");
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



 