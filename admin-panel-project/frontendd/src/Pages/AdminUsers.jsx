// import React, { useEffect, useState } from "react";
// import "../Components/Css/AdminUsers.css";
// import { useAuth } from "../Store/Auth";
// import { toast } from 'react-toastify';
// import { Link } from "react-router-dom";
// import { ImSpinner8  } from "react-icons/im";



// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [mapCount, setMapCount] = useState(0); 
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
//       setUsers(responseData.users);
//       setMapCount(responseData.users.length); // Set mapCount to the length of users array
//       console.log("ResponseData :", responseData);
//     } catch (error) {
//       console.log(
//         "Error Generated during Fetching User's Data in 'AdminUsers'"
//       );
//     }
//   };

//   const deleteUserHandler = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: authoritionToken,
          
//         },
//       });
//       console.log("User deleted successfully");
//       toast.success("User Deleted Successfully");

//       getAllUserData();
//     } catch (error) {
//       console.log("Error while deleting a user:", error);
//     }
//   };
  
//   const editUserHandler=async(id)=>{
//      editUserById(id);
//   }
  
//   useEffect(() => {
//     getAllUserData();
//   }, [authoritionToken]);

//   return (
//     <>
//       <div className="adminUserOutterdiv">
//         <div className="adminUserInnerdiv">
//           <div className="totalUserHeading"><h3>Total User's : <span className="adminUserSpan">{mapCount}</span></h3></div> 
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
//                   <td className="adminUserMapTD adminUserMapTDfirst">{user.username}</td>
//                   <td className="adminUserMapTD adminUserMapTDSecond">{user.email}</td>
//                   <td className="adminUserMapTD adminUserMapTDThird">{user.phone}</td>
//                   <td className="adminUserEditTag">
//                     <button className="adminUserEditBTN"><Link to={`/admin/users/singleuser/${user._id}/edit`} className="adminUserEditBTNLink">Edit</Link></button>
//                   </td>
//                   <td className="adminUserDeleteTag">
//                     <button className="adminUserDeleteBTN" onClick={()=>{deleteUserHandler(user._id)}}>Delete</button>
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
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { ImSpinner8  } from "react-icons/im";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [mapCount, setMapCount] = useState(0); 
  const [loading, setLoading] = useState(true); // Step 2
  const { authoritionToken } = useAuth();

  const getAllUserData = async () => {
    try {
      setLoading(true); // Step 3
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authoritionToken,
        },
      });
      const responseData = await response.json();
      setUsers(responseData.users);
      setMapCount(responseData.users.length);
      setLoading(false); // Step 3
    } catch (error) {
      console.log("Error Generated during Fetching User's Data in 'AdminUsers'");
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authoritionToken,
          
        },
      });
      console.log("User deleted successfully");
      toast.success("User Deleted Successfully");

      getAllUserData();
    } catch (error) {
      console.log("Error while deleting a user:", error);
    }
  };
  
  const editUserHandler=async(id)=>{
     editUserById(id);
  }
  
  useEffect(() => {
    getAllUserData();
  }, [authoritionToken]);

  return (
    <>
      <div className="adminUserOutterdiv">
        <div className="adminUserInnerdiv">
          <div className="totalUserHeading"><h3>Total User's : <span className="adminUserSpan">{mapCount}</span></h3></div> 
          {loading ? ( // Step 3
            <div className="adminUserspinnerContainer">
              <ImSpinner8 className="adminUserSpinnerIcon" />
            </div>
          ) : (
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
                      <button className="adminUserEditBTN"><Link to={`/admin/users/singleuser/${user._id}/edit`} className="adminUserEditBTNLink">Edit</Link></button>
                    </td>
                    <td className="adminUserDeleteTag">
                      <button className="adminUserDeleteBTN" onClick={()=>{deleteUserHandler(user._id)}}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminUsers;