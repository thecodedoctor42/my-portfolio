import React from "react"

import Main from "../components/Main"
function Contact() {
    
    return (
        <Main>
            <div className="intro hex-bg">
                <h1>Contact</h1>
                <hr className="sub-title-ul"></hr>
            </div>
            <div className="content contact">
                <div className="section">
                    <h3>Please, feel free to contact me via:</h3>
                    <div className="contact-list">
                        <p>< i class="ri-mail-fill"></i>antoniozturk98@gmail.com</p>
                        <p>
                            <i className="ri-github-fill"></i>
                            <a href="https://github.com/thecodedoctor42" target="_blank">
                                github.com/thecodedoctor42
                            </a>
                        </p>
                        <p>
                            < i className="ri-linkedin-fill"></i> 
                            <a href="https://www.linkedin.com/in/antoni-ozturk-bbba81258/" target="_blank">linkedin.com/in/antoni-ozturk</a>
                        </p>
                        <p>< i class="ri-phone-fill"></i>+(44)7450562170</p>
                    </div>
                    <a className="code-link" href="https://github.com/thecodedoctor42/my-portfolio" target="_blank">View website source code</a>
                </div>
            </div>
        </Main>
    )
}

export default Contact