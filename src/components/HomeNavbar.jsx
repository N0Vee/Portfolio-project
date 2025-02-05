import React from 'react'

function HomeNavbar() {
    return (
    <>
        <header className='container'>
            <nav className='navbar py-2'>
                <div className="navbar-brand">
                    <a href="" className="navbar-item is-size-5"><strong>WS</strong></a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a href="" className="navbar-item is-selected ml-5">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-home"></i>
                                </span>
                                <span>Home</span>
                            </span>
                        </a>
                        <a href="" className="navbar-item">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-user"></i>
                                </span>
                                <span>About</span>
                            </span>
                        </a>
                        <a href="" className="navbar-item">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-code"></i>
                                </span>
                                <span>Skills</span>
                            </span>
                        </a>
                        <a href="" className="navbar-item">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-book-open"></i>
                                </span>
                                <span>Education</span>
                            </span>
                        </a>
                        <a href="" className="navbar-item">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-at"></i>
                                </span>
                                <span>Contact</span>
                            </span>
                        </a>
                    </div>
                    <div className="navbar-end">
                        <a href="" className="navbar-item">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-flag"></i>
                                </span>
                                <span>Blog</span>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        
        {/* <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          
            <div className="navbar-brand">
                <a href="" className="navbar-item">NOVA</a>
            </div>
            <ul className="nav">
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="skills.html">Skills</a></li>
              <li><a href="education.html">Education</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
        
        </nav>
      </header> */}
    </>
  )
};

export default HomeNavbar;