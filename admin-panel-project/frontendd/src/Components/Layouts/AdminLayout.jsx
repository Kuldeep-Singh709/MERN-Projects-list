import React from 'react'
import "../Css/Default.css"
import { NavLink, Outlet } from 'react-router-dom'
import { HiUserGroup } from "react-icons/hi2";
import { FaRegMessage } from "react-icons/fa6";

// import { GrContact } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GrBusinessService } from "react-icons/gr";



function AdminLayout() {
  return (
    <>
      <header className='adminlayoutbgc'>
        <div>
            <nav className='adminLayoutNavcontainer'>
                <ul>
                    <li><NavLink to={"/admin/users"}><HiUserGroup />Users</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={"/admin/contacts"}><FaRegMessage />Contacts</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={"/"}><AiTwotoneHome />Home</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={"/service"}><MdOutlineHomeRepairService />Service</NavLink></li>
                    {/* <li><NavLink to={"/admin/services"}><GrBusinessService />Service</NavLink></li> */}
                </ul>
            </nav>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default AdminLayout