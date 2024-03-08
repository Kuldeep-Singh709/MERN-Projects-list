import React from "react";
import "../Css/Default.css";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi2";
import { FaRegMessage } from "react-icons/fa6";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GrBusinessService } from "react-icons/gr";
import { useAuth } from "../../Store/Auth";

function AdminLayout() {
  const { users, isLoading } = useAuth();
  const navigate = useNavigate();


  if (isLoading) {
    return (
      <div className="adminLayoutLoading">
        <h1>Loading....</h1>
      </div>
    );
  }

  console.log("Users:", users);
  console.log("IsAdmin:", users?.userData?.isAdmin);
  

  if (!users || !users.userData || users.userData.isAdmin !== true) {
    console.log("Redirecting to home page");
    return <Navigate to="/" />;
  }



  return (
    <>
      <header className="adminlayoutbgc">
        <div>
          <nav className="adminLayoutNavcontainer">
            <ul className="adminLayoutUL">
              <li>
                <NavLink to={"/admin/users"}>
                  <HiUserGroup />
                  Users
                </NavLink>
              </li>
            </ul>
            <ul className="adminLayoutUL">
              <li>
                <NavLink to={"/admin/users/contacts"}>
                  <FaRegMessage />
                  Contacts
                </NavLink>
              </li>
            </ul>
            <ul className="adminLayoutUL">
              <li>
                <NavLink to={"/"}>
                  <AiTwotoneHome />
                  Home
                </NavLink>
              </li>
            </ul>
            <ul className="adminLayoutUL">
              <li>
                <NavLink to={"/service"}>
                  <MdOutlineHomeRepairService />
                  Service
                </NavLink>
              </li>
              {/* <li><NavLink to={"/admin/services"}><GrBusinessService />Service</NavLink></li> */}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;
