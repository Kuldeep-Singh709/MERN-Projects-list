import React from "react";
import { useState } from "react";
import "../Components/Css/Login.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section className="sectionLoginContainer">
        {/* ----RHS---- */}

        <figure className="figureLoginContainer">
          <div className="LHStag">
            <img src="/images/Loginimg.avif" alt="Registraion Form image" className="logimage"/>
          </div>
        </figure>

        {/* ----LHS---- */}

        <main className="mainLoginContainer">
          {/* <div className="headingContainer">
            <h1>Login Page</h1>
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
