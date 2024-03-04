// import React, { useEffect, useState } from "react";
// import "../Components/Css/Service.css";

// export default function Service() {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     getCardData();
//   }, []);

//   const getCardData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/v3/service", {
//         method: "GET",
//       });
//       const responseData = await response.json();
//       setCards(responseData.response);
//     } catch (error) {
//       console.error("Error Occurred During Data Fetching of Card", error);
//     }
//   };

//   return (
//     <div className="serviceOutterTag">
//       <div className="serviceInnertag">
//         {cards.map((card) => (
//           <div key={card._id} className="serviceCardData">
//             <div className="serviceCardUpper">
//               <div className="cardupperHeading">
//                 <h2>{card.service}</h2>
//               </div>
//             </div>
//             <div className="serviceCardLowwer">
//               <div className="serviceCardLowwerInner">
//                 <div className="serviceCardLowwerHeading">
//                   <h2 className="serviceLowwerTagElement">{card.price}</h2>
//                 </div>
//                 <div className="serviceCardLowwerParaFirst">
//                   <p className="serviceLowwerTagElement">{card.provider}</p>
//                 </div>
//                 <div className="serviceCardLowwerParaSecond">
//                   <p className="">{card.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import "../Components/Css/Service.css";
import { ImSpinner2 } from "react-icons/im";

export default function Service() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

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
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error Occurred During Data Fetching of Card", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  return (
    <div className="serviceOutterTag">
      {loading ? ( // Conditionally render spinner if loading is true
        <div className="serviceSpinnerContainer">
          <ImSpinner2 className="serviceSpinnerIcon" />
        </div>
      ) : (
        <div className="serviceInnertag">
          {cards.map((card) => (
            <div key={card._id} className="serviceCardData">
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
      )}
    </div>
  );
}
