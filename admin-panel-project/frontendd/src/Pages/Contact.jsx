import React, { useState } from "react";
import "../Components/Css/Contact.css";

export default function Contact() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...(user[name] = value),
    });
  };

  const contactSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="contactOutter">
        <div className="contactLHS">
          {/* <div className="contactLHSfirst">
            <h1>Contact Us</h1>
          </div> */}
          <div className="contactLHSsecond">
            <div className="contacticonTag">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contactRHS">
          <div className="formRhs">
            <form onSubmit={contactSubmitHandler}>
              <div className="inputRHS">
                <label htmlFor="uname">UserName</label>
                <input
                  type="text"
                  id="uname"
                  name="username"
                  value={user.username}
                  onChange={changeHandler}
                  autoComplete="off"
                />
              </div>
              <div className="inputRHS">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={changeHandler}
                  autoComplete="off"
                />
              </div>
              <div className="inputRHS">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={user.message}
                  onChange={changeHandler}
                />
              </div>
              <div className="inputRHS btncontactRHS">
                <button type="submit">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
