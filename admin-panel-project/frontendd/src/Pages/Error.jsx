import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Css/Error.css";

export default function Error() {
  return (
    <>
      <div className="errorOuttercontainer">
        <div className="errorInnerContainer">
          <div className="errorItems errorFirstItem">
            <h1>404</h1>
          </div>
          <div className="errorItems errorSecondItem">
            <h2>SORRY! PAGE NOT FOUND</h2>
          </div>
          <div className="errorItems errorThirdItem">
            <p>
              Ooop's , it Seems Like that You are Trying to Access Doesn't Exist.
              if Believe There's an issue. Feel to Free to Report it,and We Will
              Look into it.
            </p>
          </div>
          <div className="errorItems errorFourthItem">
            <button className="errorBTN">
            <NavLink to="/">
                <span>Return Home</span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
