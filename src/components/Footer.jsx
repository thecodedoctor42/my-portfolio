import React, {useContext} from "react"
import {Link} from "react-router-dom"

import { ThemeContext } from "./ThemeContext"

function Footer() {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}-theme`}> 
            <div className="footer-left">
                <Link to="/">
                    <h4>ANTONI OZTURK</h4>
                </Link>
                <p>
                    A frontend developer with the skills to build, 
                    and a fresh outlook to design stunning user-friendly
                    web-apps that fulfill the clients requirements.
                </p>
            </div>
            <div className="footer-right">
                <h4>SOCIAL</h4>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/antoni-ozturk-bbba81258/" target="_blank">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="https://github.com/thecodedoctor42" target="_blank">
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href="https://twitter.com/code_doctor42" target="_blank">
                        <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/anantslife.98/" target="_blank">
                        <i className="ri-instagram-fill"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
