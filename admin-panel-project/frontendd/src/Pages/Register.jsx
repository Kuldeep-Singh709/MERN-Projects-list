import React, { useState } from "react";
import "../Components/Css/Register.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import { toast } from 'react-toastify';

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLocalStorage} = useAuth();
  // // Add state variable for controlling popup visibility
  // const [showPopup, setShowPopup] = useState(false);

  const handlerFunction = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value, /// for Dynamic Value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      console.log(response);
      
      const res_data = await response.json(); // Convert Into JSON Format
      console.log("Server response Data :", res_data);

      // Check if registration was successful
      if (response.ok) {
        
        storeTokenInLocalStorage(res_data.Token); // Store Token in LocalHost,Here "storeTokeninLocalStorage" user Creted Function(Not a Built-in Function)
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        }); // Remove Input Data After Successfull Registration

        // setShowPopup(true); // Show the popup
        // setTimeout(() => {
        //   setShowPopup(false); // Hide the popup after 3 seconds
        // }, 3000);

        toast.success("Registeration Successful");
        navigate("/login"); //After Successful Registration Navigate on Login Page
      } else {
        console.log("Registration failed.");
      console.log("Server Response Error Data newwww :", res_data.message);
      toast.warning(res_data.message);
      }
    } catch (error) {
      console.log("Error During Register :", error);
    }
  };

  return (
    <>
      {/* Popup message */}
      {/* {showPopup && (
        <div className="popup">
          <div className="innerpopup">
            <p>
              <span className="popupSpan">{user.username}</span> You Are
              Registered!
            </p>
          </div>
        </div>
      )} */}

      <section className="registerSectionTag">
      <div className="rsgisterLHStag">
        <figure className="registerfigureTag">
        
          {/* <img
            src="/images/Registrationimg.jpg"
            alt="Registraion Form image"
            className="regimage"
          /> */}
          {/* <h1 className="RegisterLHStagText">Please Register First</h1> */}
        </figure>
        </div>
        {/* <main className="registermainTag"> */}
        <div className="registermainTag">
          <div className="registerformHeadingTag">
            <h1 className="registerheadingWord">Registration</h1>
          </div>
          <div className="registerContantTag">
            <form onSubmit={handleSubmit} className="registerFormTag">
              <div className="registerinputdiv">
                <label htmlFor="uname">
                  <b>UserName</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="username"
                  value={user.username}
                  id="uname"
                  autoComplete="off"
                  // required
                  onChange={handlerFunction}
                  className="inputregTag"
                />
              </div>
              <div className="registerinputdiv">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={user.email}
                  id="email"
                  autoComplete="off"
                  // required
                  onChange={handlerFunction}
                  className="inputregTag"
                />
              </div>
              <div className="registerinputdiv">
                <label htmlFor="ph">Phone</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={user.phone}
                  id="ph"
                  autoComplete="off"
                  // required
                  onChange={handlerFunction}
                  className="inputregTag"
                />
              </div>
              <div className="registerinputdiv">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  user={user.password}
                  id="pass"
                  autoComplete="off"
                  // required
                  onChange={handlerFunction}
                  className="inputregTag"
                />
              </div>
              <br />
              <div className="regBtnTag registerinputdiv">
                <button type="submit" className="subBtn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
