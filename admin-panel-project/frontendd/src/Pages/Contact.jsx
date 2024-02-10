import React, { useState } from "react";
import "../Components/Css/Contact.css";
import { NavLink } from "react-router-dom";

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
              <div className="contactLHScontentHeading">
              <h1>Get In Touch</h1>
              <p>We value your feedback and are always eager to hear from you. 
              If you have any questions, suggestions, or inquiries, please don't hesitate to contact us.
               Our friendly team is here to help!
               </p>
               </div>
               <div className="contactLHSBTN">
                  <button className="contactLHSBTNone"><NavLink to="/register" className={"contactNavLink"}>Get Start</NavLink></button>
                  <button className="contactLHSBTNsecond"><NavLink to="/register" className={"contactNavLink"}>Get Next</NavLink></button>
               </div>
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
