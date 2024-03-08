// import React, { useEffect, useState } from "react";
// import "../Components/Css/AdminContacts.css";
// import { useAuth } from "../Store/Auth";
// import { toast } from 'react-toastify';
// import { ImSpinner11 } from "react-icons/im";


// export default function AdminContacts() {
//   const [users, setUsers] = useState([]);
//   const [mapCount, setMapCount] = useState(0); 
//   const { authoritionToken } = useAuth();
//   const [expandedMessageIds, setExpandedMessageIds] = useState([]);
//  const [loading, setLoading] = useState(true);


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
//       setLoading(false); 
//       setMapCount(responseData.contactMessage.length); 
//     } catch (error) {
//       console.log("Error in AdminContact while Fetching User Data", error);
//       setLoading(false); 
//     }
//   };


//   const adminContactDeleteHandler= async(id)=>{

//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/users/contact/delete/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: authoritionToken,
          
//         },
//       });
//       console.log("Contact deleted successfully");
//       toast.success("Contact Deleted Successfully");
//       getuserMessages();
//       setLoading(false);
//     } catch (error) {
//       console.log("Error while Deleting the Contact by Admin",error);
//       setLoading(false);
//     }
//   }





//   useEffect(() => {
//     getuserMessages();
//   }, []);

//   const toggleExpand = (messageId) => {
//     setExpandedMessageIds((prevExpandedIds) =>
//       prevExpandedIds.includes(messageId)
//         ? prevExpandedIds.filter((id) => id !== messageId)
//         : [...prevExpandedIds, messageId]
//     );
//   };

//   return (
//     <>
//       <div className="adminContactOutterDiv">
//       <div className="totalContactHeadingOutter"><div className="totalContactHeading"><h3>Total Contacts's  :  <span className="ContactUserSpan"> {mapCount}</span></h3></div></div> 
//       <div className="adminContactinputDiv">
//         <input type="text" placeholder="Search Comment's By Email"/>
//       </div>

      
//         <div className="adminContactInnerDiv">
//           {users.map((user) => (
//             <div key={user._id} className="adminContactCardData">
//               <div>
//                 <div className="adminContactCardUpper">
//                   <div className="adminContactCardUpperInner">
//                     <div className="adminContactCardupperHeading adminContactCardupperHeadingUSERNAME">
//                       <h4>{user.username}</h4>
//                     </div>
//                     <div className="adminContactCardupperHeading adminContactCardupperHeadingNAME">
//                       <h4>{user.email}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="adminContactCardLowwer">
//                 <div className="adminContactCardLowwerInner">
//                   <p className="adminContactCardLowwerInnerPara">
//                     {expandedMessageIds.includes(user._id)
//                       ? user.message
//                       : user.message.length > 100
//                       ? `${user.message.substring(0, 100)}...`
//                       : user.message}
//                   </p>
//                   {user.message.length > 100 && (
//                     <p
//                       className="adminContactCardLowwerInnerParaMore"
//                       onClick={() => toggleExpand(user._id)}
//                     >
//                       {expandedMessageIds.includes(user._id)
//                         ? "Show less"
//                         : "...more"}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div className="adminContactCardDeleteBTN">
//                 <button onClick={()=>adminContactDeleteHandler(user._id)}>Delete</button>
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
import { toast } from 'react-toastify';
import { ImSpinner8  } from "react-icons/im";

export default function AdminContacts() {
  const [users, setUsers] = useState([]);
  const { authoritionToken } = useAuth();
  const [expandedMessageIds, setExpandedMessageIds] = useState([]);
  const [loading, setLoading] = useState(true); 

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
      setLoading(false); 
    } catch (error) {
      console.log("Error in AdminContact while Fetching User Data", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getuserMessages();
  }, []);

  const toggleExpand = (messageId) => {
    setExpandedMessageIds((prevExpandedIds) =>
      prevExpandedIds.includes(messageId)
        ? prevExpandedIds.filter((id) => id !== messageId)
        : [...prevExpandedIds, messageId]
    );
  };

  const adminContactDeleteHandler= async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/contact/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authoritionToken,
        },
      });
      console.log("Contact deleted successfully");
      toast.success("Contact Deleted Successfully");
      getuserMessages();
      setLoading(false);
    } catch (error) {
      console.log("Error while Deleting the Contact by Admin",error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="adminContactOutterDiv">
        <div className="totalContactHeadingOutter"><div className="totalContactHeading"><h3>Total Contacts's  :  <span className="ContactUserSpan"> {users.length}</span></h3></div></div> 
        <div className="adminContactinputDiv">
          <input type="text" placeholder="Search Comment's By Email"/>
        </div>
        <div className="adminContactInnerDiv">
          {loading ? (
            <div className="adminContactspinnerContainer">
              <ImSpinner8 className="adminContactSpinnerIcon" />
            </div>
          ) : (
            users.map((user) => (
              <div key={user._id} className="adminContactCardData">
                <div className="adminContactCardUpper">
                  <div className="adminContactCardUpperInner">
                    <div className="adminContactCardupperHeading adminContactCardupperHeadingUSERNAME">
                      <h4>{user.username}</h4>
                    </div>
                    <div className="adminContactCardupperHeading adminContactCardupperHeadingNAME">
                      <h4>{user.email}</h4>
                    </div>
                  </div>
                </div>
                <div className="adminContactCardLowwer">
                  <div className="adminContactCardLowwerInner">
                    <p className="adminContactCardLowwerInnerPara">
                      {expandedMessageIds.includes(user._id)
                        ? user.message
                        : user.message.length > 100
                        ? `${user.message.substring(0, 100)}...`
                        : user.message}
                    </p>
                    {user.message.length > 100 && (
                      <p
                        className="adminContactCardLowwerInnerParaMore"
                        onClick={() => toggleExpand(user._id)}
                      >
                        {expandedMessageIds.includes(user._id)
                          ? "Show less"
                          : "...more"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="adminContactCardDeleteBTN">
                  <button onClick={()=>adminContactDeleteHandler(user._id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}


