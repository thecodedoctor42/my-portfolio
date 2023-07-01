import React, { useContext, useState } from "react"
import {Link} from "react-router-dom"

import { ThemeContext } from "./ThemeContext"
import useScrollDirection from "../hooks/useScrollDown"
import headerImg from "../assets/Profile.png"


function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const {theme, toggleTheme} = useContext(ThemeContext)
    const scrollDirection = useScrollDirection()
    
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
    })
    
    const navbarHtml = 
        <nav className="header-navbar">
            <Link to="/"><p onClick={toggleNavMenu}>HOME</p></Link>
            <Link to="/about"><p onClick={toggleNavMenu}>ABOUT</p></Link>
            <Link to="/projects"><p onClick={toggleNavMenu}>PROJECTS</p></Link>
            <Link to="/contact"><p onClick={toggleNavMenu}>CONTACT</p></Link>

        </nav>

    function toggleNavMenu(){
        const navMenu = document.getElementById(`navbar-vert`)
        if(navMenu.style.display === "flex"){
            navMenu.style.display = "none"
        } else {
            navMenu.style.display = "flex"
        }
    }
    return (
        <header className={`${theme}-theme ${scrollDirection === "down" ? "hide" : ""}`}>
            <div className="top-nav">
                <Link to="/">
                    <div className="header-title">
                        <img className="header-img" src={headerImg} alt="Profile picture of frontend developer, Antoni Ozturk"/>
                        <p>ANTONI OZTURK</p>
                    </div>
                </Link>
                <div className="mode-cnt">
                    <p style={{color:"#202020"}}>Light</p>
                    <div style={theme === "light" ? {justifyContent: "left"} : {justifyContent: "right"}} className={`toggle-cnt ${theme === "light" ? "light" : "dark"}-theme`} onClick={toggleTheme}>
                        <div className={`toggler-${theme === "light" ? "light" : "dark"}`}></div>
                    </div>
                    <p style={{color:"white"}}>Dark</p>
                </div>
                {windowWidth > 619 &&<div id="navbar-horiz">
                    {navbarHtml}
                </div>}
                <i className="ri-menu-line" onClick={toggleNavMenu}></i>
            </div>
            {windowWidth < 620 && <div id="navbar-vert">
                {navbarHtml}
            </div>}
        </header>
    )
}

export default Header
