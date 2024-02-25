import React, { useEffect, useState } from "react";
import "../Components/Css/Service.css";

export default function Service() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCardData();
  }, []);

  const getCardData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v3/service", {
        method: "GET",
      });
      const responseData = await response.json();
      setCards(responseData.response);
    } catch (error) {
      console.error("Error Occurred During Data Fetching of Card", error);
    }
  };

  return (
    <div className="serviceOutterTag">
      <div className="serviceInnertag">
        {/* {cards.map((card) => (
          <div key={card._id} className="serviceCardData">
            <h2>{card.service}</h2>
            <p>{card.description}</p>
            <h2>{card.price}</h2>
            <p>{card.provider}</p>
          </div>
        ))} */}
        {cards.map((card) => (
          <div key={card._id} className="serviceCardData">
            {/* <div className="serviceCardData"> */}
            <div className="serviceCardUpper">
              <div className="cardupperHeading">
                <h2>{card.service}</h2>
              </div>
            </div>
            <div className="serviceCardLowwer">
              <div className="serviceCardLowwerInner">
                <div className="serviceCardLowwerHeading">
                  <h2 className="serviceLowwerTagElement">{card.price}</h2>
                </div>
                <div className="serviceCardLowwerParaFirst">
                  <p className="serviceLowwerTagElement">{card.provider}</p>
                </div>
                <div className="serviceCardLowwerParaSecond">
                  <p className="">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
