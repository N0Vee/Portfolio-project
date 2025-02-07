import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bulma/css/bulma.min.css';
import HomeNavbar from './components/HomeNavbar';
import MainSection from './components/MainSection';
import SkillSection from "./components/SkillSection";
import BlogSection from "./components/BlogSection"; // นำเข้า BlogSection

function App() {
  return (
    <Router>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <SkillSection />
          </>
        } />
        <Route path="/blog" element={<BlogSection />} />
      </Routes>
    </Router>
  );
}

export default App;
