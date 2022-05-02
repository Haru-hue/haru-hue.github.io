import React, {useEffect, useState} from "react"

export default function Navbar () {
    const [isActive, setisActive] = React.useState(false)
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 350 ? setStickyClass('is-fixed-top') : setStickyClass("");
      }
    };  

    return (
            <nav className={`navbar ${stickyClass}`} role="navigation" aria-label="main-navigation">
                <div className="container">
                    <div className="navbar-brand">
                    <a href = "#" className="navbar-item is-uppercased">Joshua <span className="mt-4">•</span></a>
                    <a onClick={() => {
                    setisActive(!isActive);
                    }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                    <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                        <ul className={`navbar-menu navbar-end ${isActive ? "is-active" : ""}`}>
                        
                            <li className={`navbar-item`}
                            href="#about">About</li>
                                <li className={`navbar-item`} href="#skills">Skills</li>
                                <li className={`navbar-item`} href="#projects">Projects</li>
                                <li className={`navbar-item`} href="#resume">Resume</li>
                            
                        </ul>

                    </div>
                </div>
            </nav>
    )
}