// AdminRoutes.jsx

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../Components/Layouts/AdminLayout";
// import AdminContacts from "./AdminContacts";
// import AdminUserUpdate from "./AdminUserUpdate";
// import AdminUsers from "./AdminUsers";

// const AdminRoutes = () => {
//   return (
//     <AdminLayout>
//       <Routes>
//         <Route path="users" element={<AdminUsers />} />
//         <Route path="users/contacts" element={<AdminContacts />} />
//         <Route path="users/singleuser/:id/edit" element={<AdminUserUpdate />} />
//       </Routes>
//     </AdminLayout>
//   );
// };

// export default AdminRoutes;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../Components/Layouts/AdminLayout";
// import AdminContacts from "./AdminContacts";
// import AdminUserUpdate from "./AdminUserUpdate";
// import AdminUsers from "./AdminUsers";
// import AccessDenied from "../Components/Layouts/AccessDenied ";
// import { useAuth } from "../Store/Auth"; // Import useAuth hook

// const AdminRoutes = () => {
//   const { isAdmin } = useAuth(); // Get isAdmin status from useAuth hook

//   return (
//     <AdminLayout>
//       {console.log("Admin Route 1st")}

//       <Routes>
//         <Route path="users" element={<AdminUsers />} />
//         <Route path="/users/contacts" element={<AdminContacts />} />
//         <Route
//           path="/users/singleuser/:id/edit"
//           element={<AdminUserUpdate />}
//         />
//       </Routes>
//       {console.log("Admin Route 2nd ")}
//     </AdminLayout>
//   );
  //   return isAdmin ? (
  //     <AdminLayout>
  // {  console.log("Admin Route 1st")}

  //       <Routes>
  //         <Route path="/users" element={<AdminUsers />} />
  //         <Route path="/users/contacts" element={<AdminContacts />} />
  //         <Route path="/users/singleuser/:id/edit" element={<AdminUserUpdate />} />
  //       </Routes>
  // {  console.log("Admin Route 2nd ")}

  //     </AdminLayout>
  //   ) : (

  //     <AccessDenied />
  //   );
// };

// export default AdminRoutes;
