// import React, { useEffect, useState } from "react";
// import '../Components/Css/Default.css';
import "../Components/Css/About.css";
import { useAuth } from "../Store/Auth";


export default function About() {
const {user} = useAuth();

// const nameofUser =user.userData.username;
// const nameofUser = user?.userData?.username;

// console.log("uname1 :", user.userData.username);
// console.log("uname1 :", user.userData.email);

      // useEffect(()=>{
      //   setuserName(
      //     {userName:user.userData.username}
      //   );
      // })
  return (
    <>
      <div className="aboutOutterTag">
        <div className="aboutLHSsection">
          <div className="aboutLHSinnersection">
            <h1>About Us</h1>
           <p>
              Welcome to our admin panel! We are dedicated to providing you with
              {/* Welcome {user.userData.username}to our admin panel! We are dedicated to providing you with */}
              {/* Welcome " <span className="aboutSpanfirst">{user.userData.username}</span> " to our admin panel! We are dedicated to providing you with */}
              the best tools and features to manage your business effectively.
              Our platform is designed to streamline your workflows, increase
              productivity, and drive success.
            </p>
          </div>
        </div>

        <div className="aboutRHSsection">
          <div className="aboutRHSinnerSection">
            
            <div className="aboutMissionTag">
            <h1>Our Mission</h1>
              <p>At Here, our mission is to empower businesses of all sizes to thrive in the digital world. 
              We believe in harnessing the power of technology to simplify complex tasks and enable growth opportunities for our clients.
              </p>
            </div>
            <div className="aboutVisionTag">
            <h1>Our Vision</h1>
              <p>Our vision is to become the leading provider of innovative solutions that revolutionize how businesses operate.
               By staying at the forefront of technology and continuously adapting to the evolving needs of our users,
                we aim to set new standards of excellence in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="tagOutter">
    //     <h1 className="tagInner">Welcomme TO About Page</h1>
    // </div>
  );
}
