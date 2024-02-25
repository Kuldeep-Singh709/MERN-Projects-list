import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import "../Components/Css/Login.css";
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/v1/auth/login";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {storeTokenInLocalStorage , isLoggedIn} = useAuth();
  // const [isLoggedInA, setisLoggedInB] = useState(isLoggedIn)
  
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    // console.log("Before try Block of Loginjsx");
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    
      // console.log("Login Response:",response);

      if (response.ok) {
        const { Token } = await response.json();
        storeTokenInLocalStorage(Token)
        setUser({ email: "", password: "" });
        // alert("login Succesfull");
        toast.success("Successfully Logged In");
        navigate("/");
      } else {
        // alert("Invalid Credential");
        toast.error("Invalid Credential");
        console.log("Invalid Credential");
      }
    } catch (error) {
      console.log("Error Occurs During Login", error);
    }
  };

  return (
    <>
      <section className="sectionLoginContainer">
        {/* ----RHS---- */}

        <figure className="figureLoginContainer">
          <div className="LHStag">
            {/* <img
              src="/images/Loginimg.avif"
              alt="Registraion Form image"
              className="logimage"
            /> */}
            <h1 className="LoginLHStagText">Please Login First</h1>
          </div>
        </figure>

        {/* ----LHS---- */}

        <main className="mainLoginContainer">
          <div className="loginheadingContainerTag">
            <h1 className="loginHeadingWord">Login</h1>
          </div>

          {/* <div className="registerformHeadingTag">
            <h1 className="headingWord">Registration</h1>
          </div> */}

          <div className="LogincontentContainer">
            <form onSubmit={handleSubmit} className="LoginformContainer">
              <div className="logininputDIV">
                {/* <label htmlFor="email" /> */}
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  id="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  required
                  onChange={inputHandler}
                  className="custom-input"
                />
              </div>
              <div className="logininputDIV">
                {/* <label htmlFor="pass" /> */}
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  id="pass"
                  placeholder="Enter password"
                  autoComplete="off"
                  required
                  onChange={inputHandler}
                  className="custom-input"
                />
              </div>

              <div className="lgBtn logininputDIV">
                <button type="submit">Login Now</button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}




