// Home.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Components/Css/Home.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    '/images/frontend.jpg',
    '/images/BackEnd.jpg',
    '/images/design3D.jpg',
    '/images/Graduation.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="homeOutterContainer">
      <div className="LHShomeContainer">
        <div className="LHSinnerContainer">
          <div className="LHSItems">
            <h1>Better Solution For Your Panel</h1>
          </div>
          <div className="LHSItems">
            <p>
              When somebody tells you nothing is impossible, ask him to
              dribble a football.
            </p>
          </div>
          <div className="LHSItems homeBTN ">
            <button className="BTNone">
              <NavLink to="/register">
                <span>Get Started</span>
              </NavLink>
            </button>
            <button className="BTNsecond">
              <NavLink to="/register">
                <span className="fa-solid"><i className="fa-arrow-alt-circle-right"></i> Get Next</span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="RHShomeContainer">
        <div className="RHSinnercontainer">
          <img
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            className="active"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
