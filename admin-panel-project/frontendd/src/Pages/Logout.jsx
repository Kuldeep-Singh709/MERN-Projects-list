import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import { toast } from 'react-toastify';




export default function Logout() {
  const { logoutUser } = useAuth();
  useEffect(() => {
    logoutUser();
    toast.info("Successfully Logged out");
  }, [logoutUser]);

  return <Navigate to="/login" />;
}



 