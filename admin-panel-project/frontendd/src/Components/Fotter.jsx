import React from "react";
import "../Components/Css/Fotter.css";

export default function Fotter() {
  return (
    <div className="outterFotterTag">
      <div className="firstDiv">
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
      <div className="secondDiv">
        <ul>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div className="thirdDiv">
        <p>INFFO Copyright © 2023 Info - All rights reserved   ||    Designed By:
          Kuldeep Singh</p>
      </div>
    </div>
  );
}
