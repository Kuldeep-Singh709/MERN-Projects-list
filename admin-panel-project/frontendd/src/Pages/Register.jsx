import React from "react";
import "../Components/Css/Register.css"

export default function Register() {
  return (
    <>
      <section className="sectionTag">
        <figure className="figureTag">
            <img src="/images/LoginBGC2.jpg" alt="Registraion Form image"/>
        </figure>
        <main className="mainTag">
          <div className="formHeadingTag">
            <h1>Registration Form</h1>
          </div>
          <div className="contantTag">
            <form>
              <label for="uname"><b>UserName</b></label>
              <input type="text" placeholder="Enter Name" name="username" id="uname" required/>
              <label for="email">Email</label> 
              <input type="email" placeholder="Enter Email" name="email" id="email" required />
              <label for="ph">Phone</label>
              <input type="number" placeholder="Enter Phone Number" name="phone" id="ph" required />
              <label for="pass">Password</label>
              <input type="password" placeholder="Enter password" name="password" id="pass" required/>
              <input type="button"/>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}
