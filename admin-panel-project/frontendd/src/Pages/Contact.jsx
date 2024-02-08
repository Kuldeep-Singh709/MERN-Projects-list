import React, { useState } from "react";
import "../Components/Css/Contact.css";

export default function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]:value,
    });

      // setContact((contact)=>({
      //   ...contact,
      //   [name]:value,
      // }));
  };

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    console.log(contact);
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
                {/* <label htmlFor="uname">UserName</label> */}
                <label htmlFor="uname"></label>
                <input
                  type="text"
                  id="uname"
                  name="username"
                  placeholder="Enter UserName"
                  value={contact.username}
                  onChange={changeHandler}
                  autoComplete="off"
                  required
                />
                
              </div>
              <div className="inputRHS">
                {/* <label htmlFor="email">Email</label> */}
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contact.email}
                  placeholder="Enter Email"
                  onChange={changeHandler}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="inputRHS">
                {/* <label htmlFor="message">Message</label> */}
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  // cols={30}
                  // rows={10}
                  value={contact.textareamessage}
                  onChange={changeHandler}
                  placeholder="Enter Message"
                  // autoComplete="off"
                  // required
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
