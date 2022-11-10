import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Projects from "./pages/projects/Projects";
import ReactSwitch from "react-switch";
import Footer from "./components/footer/Footer";

export const ThemeContext = createContext(null); 

function App() {
  const [theme, setTheme] = useState("dark"); 

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </ThemeContext.Provider>
  );
}

export default App;
