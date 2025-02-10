import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/style/App.css";
import 'bulma/css/bulma.min.css';
import HomeNavbar from './components/layout/HomeNavbar';
import MainSection from './components/section/MainSection';
import SkillsSection from "./components/section/SkillsSection";
import BlogSection from "./components/blog/BlogSection";
import BlogAdmin from "./components/blog/BlogAdmin";
import BlogEdit from "./components/blog/BlogEdit";
import BlogAdd from "./components/blog/BlogAdd";
import BlogView from "./components/blog/BlogView";

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
        <Route path="/view/:id" element={<BlogView />} />
      </Routes>
    </Router>
  );
}

export default App;
