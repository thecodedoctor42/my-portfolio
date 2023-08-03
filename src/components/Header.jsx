import { useContext, useState } from "react"

import { ThemeContext } from "./ThemeContext"
import useScrollDirection from "../hooks/useScrollDown"


function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const {theme, toggleTheme} = useContext(ThemeContext)
    const scrollDirection = useScrollDirection()

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
    })
    
    const navbarHtml = 
        <nav className="header-navbar">
            <a href='/#top'>HOME</a>
            <a href='/#home-about'>ABOUT</a>
            <a href='/#home-projects'>PROJECTS</a>
            <a href='/#home-contact'>CONTACT</a>
        </nav>

    const sidebarHtml = 
        <nav className={`${theme}-theme header-sidebar`}>
            <button className="close-btn" onClick={toggleSidebar}>&times;</button>
            <a href='/#top' onClick={toggleSidebar}>HOME</a>
            <a href='/#home-about' onClick={toggleSidebar}>ABOUT</a>
            <a href='/#home-projects' onClick={toggleSidebar}>PROJECTS</a>
            <a href='/#home-contact' onClick={toggleSidebar}>CONTACT</a>
        </nav>


    function toggleSidebar(){
        const sidebar = document.getElementById(`sidebar`)
        sidebar.style.right === '0px' ? sidebar.style.right = '-250px' : sidebar.style.right = '0px'
        console.log(sidebar.style)
    }
    return (
        <header className={`${theme}-theme ${scrollDirection === "down" ? "hide" : ""}`}>
            <div className="top-nav">
                <a href="/#top">
                    <div className="header-title">
                        <p>ANTONI OZTURK</p>
                    </div>
                </a>
                <div className="mode-cnt">
                    <p style={{color:"#202020"}}>Light</p>
                    <div style={theme === "light" ? {justifyContent: "left"} : {justifyContent: "right"}} className={`toggle-cnt ${theme === "light" ? "light" : "dark"}-theme`} onClick={toggleTheme}>
                        <div className={`toggler-${theme === "light" ? "light" : "dark"}`}></div>
                    </div>
                    <p style={{color:"rgb(245,245,245"}}>Dark</p>
                </div>
                {windowWidth > 619 && <div id="navbar">
                    {navbarHtml}
                </div>}
                <i className="ri-menu-line" onClick={toggleSidebar}></i>
            </div>
            {windowWidth < 620 && <div id="sidebar" className={`${theme}-theme`}>
                {sidebarHtml}
            </div>}
        </header>
    )
}

export default Header
