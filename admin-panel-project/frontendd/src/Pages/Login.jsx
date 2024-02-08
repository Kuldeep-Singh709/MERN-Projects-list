import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import "../Components/Css/Login.css";

const URL = "http://localhost:5000/api/v1/auth/login";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {storeTokeninLocalStorage} = useAuth();
  
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
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const res_data = await response.json();
        storeTokeninLocalStorage(res_data.Token);  // Store Token in LocalHost,Here "storeTokeninLocalStorage" user Creted Function(Not a Built-in Function)
        setUser({ email: "", password: "" });
        alert("login Succesfull");
        navigate("/");
      } else {
        alert("Invalid Credential");
        console.log("Invalid Credential");
      }
      // console.log(response);
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
            <img
              src="/images/Loginimg.avif"
              alt="Registraion Form image"
              className="logimage"
            />
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

          <div className="contentContainer">
            <form onSubmit={handleSubmit} className="formContainer">
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
