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
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
