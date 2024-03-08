import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import Fotter from "./Components/Fotter";
import 'font-awesome/css/font-awesome.min.css';// Import the Font Awesome styles
import Error from "./Pages/Error";
import Logout from "./Pages/Logout";
import AdminLayout from "./Components/Layouts/AdminLayout";
import AdminUsers from "./Pages/AdminUsers";
import AdminContacts from "./Pages/AdminContacts";
import AdminUserUpdate from "./Pages/AdminUserUpdate";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="*"  element={<Error/>} /> //WildCard Route
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/admin" element={<AdminLayout/>}> {/* Nested Routes of Admin */}
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="users/contacts" element={<AdminContacts/>}/>
            <Route path="users/singleuser/:id/edit" element={<AdminUserUpdate/>}/>
          </Route>
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;