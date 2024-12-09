import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import Categories from "./pages/Categories"
import About from "./pages/About"

function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <FooterComponent/>
  </div>
}

export default App