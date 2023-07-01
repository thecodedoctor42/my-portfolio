import React from "react"

import Main from "../components/Main"
function Contact() {
    
    return (
        <Main>
            <div className="intro hex-bg">
                <h1>Contact</h1>
                <hr className="sub-title-ul"></hr>
            </div>
            <div className="content">
                <div className="section">
                    <h3>Please, feel free to contact me via:</h3>
                    <ul>
                        <p>Email: antoniozturk98@gmail.com</p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/antoni-ozturk-bbba81258/" target="_blank">https://www.linkedin.com/in/antoni-ozturk-bbba81258/</a></p>
                        <p>Mobile: +(44)7450562170</p>
                    </ul>
                </div>
            </div>
        </Main>
    )
}

export default Contact