// import React, { useEffect, useState } from "react";
// import "../Components/Css/AdminUsers.css";
// import { useAuth } from "../Store/Auth";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [mapCount, setMapCount] = useState();
//   const { authoritionToken } = useAuth();

//   const getAllUserData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/admin/users", {
//         method: "GET",
//         headers: {
//           Authorization: authoritionToken,
//         },
//       });
//       const responseData = await response.json();
//       setUsers(responseData.users); // Set users array from responseData
//       console.log("ResponseData :", responseData);
//     } catch (error) {
//       console.log(
//         "Error Generated during Fetching User's Data in 'AdminUsers'"
//       );
//     }
//   };
//   const handleMap = () => {
//     setMapCount(mapCount + 1);
//   };
//   useEffect(() => {
//     getAllUserData();
//   }, [authoritionToken]); // Include authoritionToken as a dependency



//   return (
//     <>
//       <div className="adminUserOutterdiv">
//         <div className="adminUserInnerdiv">
//         <div><h3>Total user:{}</h3></div>
//           <table>
//             <thead>
//               <tr className="adminUserHeadingTR">
//                 <th className="adminUserHeadingTH">Name</th>
//                 <th className="adminUserHeadingTH">Email</th>
//                 <th className="adminUserHeadingTH">Phone</th>
//                 <th className="adminUserHeadingTH">Update</th>
//                 <th className="adminUserHeadingTH">Delete</th>
//               </tr>
//             </thead>
//             <tbody className="adminuserTbody">
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td classname="adminUserMapTD adminUserMapTDfirst">{user.username}</td>
//                   <td classname="adminUserMapTD adminUserMapTDSecond">{user.email}</td>
//                   <td classname="adminUserMapTD adminUserMapTDThird">{user.phone}</td>
//                   <td className="adminUserEditTag">
//                     <button className="adminUserEditBTN">Edit</button>
//                   </td>
//                   <td className="adminUserDeleteTag">
//                     <button className="adminUserDeleteBTN">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminUsers;





import React, { useEffect, useState } from "react";
import "../Components/Css/AdminUsers.css";
import { useAuth } from "../Store/Auth";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [mapCount, setMapCount] = useState(0); 
  const { authoritionToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authoritionToken,
        },
      });
      const responseData = await response.json();
      setUsers(responseData.users);
      setMapCount(responseData.users.length); // Set mapCount to the length of users array
      console.log("ResponseData :", responseData);
    } catch (error) {
      console.log(
        "Error Generated during Fetching User's Data in 'AdminUsers'"
      );
    }
  };

  useEffect(() => {
    getAllUserData();
  }, [authoritionToken]);

  return (
    <>
      <div className="adminUserOutterdiv">
        <div className="adminUserInnerdiv">
          <div className="totalUserHeading"><h3>Total User's : {mapCount}</h3></div> 
          <table>
            <thead>
              <tr className="adminUserHeadingTR">
                <th className="adminUserHeadingTH">Name</th>
                <th className="adminUserHeadingTH">Email</th>
                <th className="adminUserHeadingTH">Phone</th>
                <th className="adminUserHeadingTH">Update</th>
                <th className="adminUserHeadingTH">Delete</th>
              </tr>
            </thead>
            <tbody className="adminuserTbody">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="adminUserMapTD adminUserMapTDfirst">{user.username}</td>
                  <td className="adminUserMapTD adminUserMapTDSecond">{user.email}</td>
                  <td className="adminUserMapTD adminUserMapTDThird">{user.phone}</td>
                  <td className="adminUserEditTag">
                    <button className="adminUserEditBTN">Edit</button>
                  </td>
                  <td className="adminUserDeleteTag">
                    <button className="adminUserDeleteBTN">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
