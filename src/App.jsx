import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import 'bulma/css/bulma.min.css';
import HomeNavbar from './components/HomeNavbar';
import MainSection from './components/MainSection';
import SkillSection from "./components/SkillSection";
function App() {
    
  return (
    <>
        <HomeNavbar />
        <MainSection />
        <SkillSection />
    </>
  );
}

export default App;
