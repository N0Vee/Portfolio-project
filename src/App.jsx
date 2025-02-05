import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import 'bulma/css/bulma.min.css';
import HomeNavbar from './components/HomeNavbar';
import MainSection from './components/MainSection';
function App() {
    
  return (
    <>
        <HomeNavbar />
        <MainSection />
    </>
  );
}

export default App;
