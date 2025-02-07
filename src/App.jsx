import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bulma/css/bulma.min.css';
import HomeNavbar from './components/HomeNavbar';
import MainSection from './components/MainSection';
import SkillsSection from "./components/SkillsSection";
import BlogSection from "./components/BlogSection";
import BlogAdmin from "./components/BlogAdmin";
import BlogEdit from "./components/BlogEdit";
import BlogAdd from "./components/BlogAdd";

function App() {
  return (
    <Router>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <SkillsSection />
          </>
        } />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/edit" element={<BlogAdmin />} />
        <Route path="/edit/:id" element={<BlogEdit />} />
        <Route path="/add" element={<BlogAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
