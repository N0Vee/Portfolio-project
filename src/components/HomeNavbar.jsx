import React from 'react'

function HomeNavbar() {
    return (
    <>
        <header>
        <nav>
          <div className="menu">
            <p className="logo">
              <span className="logo_name">No</span>
              <span className="logo_name2">va</span>
            </p>
            <ul className="nav">
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="skills.html">Skills</a></li>
              <li><a href="education.html">Education</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
};

export default HomeNavbar;