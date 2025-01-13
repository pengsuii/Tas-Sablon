import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Login from "./auth/login"
import Dashboard from './pages/Dashboard';
import Catalogue from "./pages/Catalogue";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return <div>
    {location.pathname !== "/login" && <NavbarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
      <Route path="/catalogue" element={<Catalogue />} />
    </Routes>
    {location.pathname !== "/login" && <FooterComponent/>}
  </div>
}

export default App