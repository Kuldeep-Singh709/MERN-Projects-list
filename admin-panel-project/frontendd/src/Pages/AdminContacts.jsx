// import React, { useEffect, useState } from "react";
// import "../Components/Css/AdminContacts.css";
// import { useAuth } from "../Store/Auth";

// export default function AdminContacts() {
//   const [users, setUsers] = useState([]);
//   const { authoritionToken } = useAuth();

//   const getuserMessages = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/admin/users/contacts",
//         {
//           method: "GET",
//           headers: {
//             Authorization: authoritionToken,
//           },
//         }
//       );
//       const responseData = await response.json();
//       setUsers(responseData.contactMessage);
//       console.log("Aa gya Bhai :", users);
//       // setMapCount(responseData.users.length); // Set mapCount to the length of users array
//     } catch (error) {
//       console.log("Error in AdminContact while Fetching User Data", error);
//     }
//   };
//   useEffect(() => {
//     getuserMessages();
//   }, []);

//   return (
//     <>
//       <div className="adminContactOutterDiv">
//         <div className="adminContactInnerDiv">
//           {users.map((user) => (
//             <div key={user._id} className="adminContactCardData">
//               <div>
//                 <div className="adminContactCardUpper">
//                   <div className="adminContactCardUpperInner">
//                     <div className="adminContactCardupperHeading adminContactCardupperHeadingID">
//                       <h2>{user._id}</h2>
//                     </div>
//                     <div className="adminContactCardupperHeading adminContactCardupperHeadingUSERNAME">
//                       <h4>{user.username}</h4>
//                     </div>
//                     <div className="adminContactCardupperHeading adminContactCardupperHeadingNAME">
//                       <h4>{user.email}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="adminContactCardLowwer" >
//                 <div className="adminContactCardLowwerInner">
//                   <p className="adminContactCardLowwerInnerPara">{user.message}</p>
//                   <p className="adminContactCardLowwerInnerParaMore">...more</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useEffect, useState } from "react";
import "../Components/Css/AdminContacts.css";
import { useAuth } from "../Store/Auth";

export default function AdminContacts() {
  const [users, setUsers] = useState([]);
  const { authoritionToken } = useAuth();

  const getuserMessages = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/users/contacts",
        {
          method: "GET",
          headers: {
            Authorization: authoritionToken,
          },
        }
      );
      const responseData = await response.json();
      setUsers(responseData.contactMessage);
    } catch (error) {
      console.log("Error in AdminContact while Fetching User Data", error);
    }
  };
  useEffect(() => {
    getuserMessages();
  }, []);

  return (
    <>
      <div className="adminContactOutterDiv">
        <div className="adminContactInnerDiv">
          {users.map((user) => (
            <div key={user._id} className="adminContactCardData">
              <div>
                <div className="adminContactCardUpper">
                  <div className="adminContactCardUpperInner">
                    <div className="adminContactCardupperHeading adminContactCardupperHeadingID">
                      <h2>{user._id}</h2>
                    </div>
                    <div className="adminContactCardupperHeading adminContactCardupperHeadingUSERNAME">
                      <h4>{user.username}</h4>
                    </div>
                    <div className="adminContactCardupperHeading adminContactCardupperHeadingNAME">
                      <h4>{user.email}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="adminContactCardLowwer" >
                {/* <div className="adminContactCardLowwerInner" > */}
                <div className={`adminContactCardLowwerInner ${user.message.length > 100 ? 'show-more' : ''}`}>
                  {/* <p className={`adminContactCardLowwerInnerPara ${user.message.length > 100 ? 'show-more' : ''}`}> */}
                  <p className="adminContactCardLowwerInnerPara">
                    {user.message.length > 100 ? `${user.message.substring(0, 100)}...` : user.message}
                  </p>
                  {user.message.length > 100 && (
                    <p className="adminContactCardLowwerInnerParaMore">...more</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
