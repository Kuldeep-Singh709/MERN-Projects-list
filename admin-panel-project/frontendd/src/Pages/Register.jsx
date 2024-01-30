import React, { useState } from "react";
import "../Components/Css/Register.css";
// import "./pagesCss/Registerrr.css";


export default function Register() {
const[user,setUser] = useState({
  username:"",
  email:"",
  phone:"",
  password:"",
});
const handlerFunction=(e)=>{
console.log(e);

  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]:value, /// for Dynamic Value
  });
}

const handleSubmit =(e)=> {

  e.preventDefault();
  alert(user);
}


  return (
    <>
      <section className="registerSectionTag">
        <figure className="registerfigureTag">
          <img src="/images/Registrationimg.jpg" alt="Registraion Form image" className="regimage"/>

        </figure>
        <main className="registermainTag">
          <div className="registerformHeadingTag">
            <h1 className="headingWord">Registration</h1>
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
                  required
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
                  required
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
                  required
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
                  required
                  onChange={handlerFunction}
                  className="inputregTag"
                />
              </div>
              <br />
              <div className="regBtnTag registerinputdiv">
              <button type="submit" className="subBtn">Register</button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}
