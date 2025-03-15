import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// CSS
import 'bulma/css/bulma.min.css';
import "./components/style/Global.css";
import "./components/style/Navbar.css";
import "./components/style/MainSection.css";
import "./components/style/SkillsSection.css";
import "./components/style/BlogSection.css";
import "./components/style/BlogView.css";
import "./components/style/AboutSection.css";
import "./components/style/EducationSection.css";
// Components
import HomeNavbar from './components/layout/HomeNavbar';
import MainSection from './components/section/MainSection';
import SkillsSection from "./components/section/SkillsSection";
import BlogSection from "./components/blog/BlogSection";
import BlogAdmin from "./components/blog/BlogAdmin";
import BlogEdit from "./components/blog/BlogEdit";
import BlogAdd from "./components/blog/BlogAdd";
import BlogView from "./components/blog/BlogView";
import AboutSection from "./components/section/AboutSection";
import EducationSection from "./components/section/EducationSection";

function App() {
  return (
    <Router>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <SkillsSection />
            <AboutSection />
            <EducationSection />
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/edit" element={<BlogAdmin />} />
        <Route path="/edit/:id" element={<BlogEdit />} />
        <Route path="/add" element={<BlogAdd />} />
        <Route path="/view/:id" element={<BlogView />} />
      </Routes>
    </Router>
  );
}

export default App;
