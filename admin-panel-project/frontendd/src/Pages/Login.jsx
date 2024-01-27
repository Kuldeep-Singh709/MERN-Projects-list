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
      <section className="sectionContainer">
        {/* ----RHS---- */}

        <figure className="figureContainer">
          <div className="LHStag">
            <img src="/images/Icon5.jpg" className="logimage" />
            {/* <p className="running-text">Running Text</p> */}
          </div>
        </figure>

        {/* ----LHS---- */}

        <main className="mainContainer">
          {/* <div className="headingContainer">
            <h1>Login Page</h1>
          </div> */}

          <div className="contentContainer">
            <form onSubmit={handleSubmit} className="formContainer">
              <div>
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
              <div>
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

              <div className="lgBtn">
                <button type="submit">Login Now</button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}
