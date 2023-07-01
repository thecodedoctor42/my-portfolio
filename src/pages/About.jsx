import React from "react"
import data from "../data.js"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"

import Main from "../components/Main.jsx"

function About() {
    
    const skillsHtml = data.skills.map(skill => (
        <div key={nanoid()} className="skill">
            <span className="bold-500">{skill}</span>
        </div>
    ))

    return (
        <Main >
            <div className="intro hex-bg">
                <h1>ABOUT ME</h1>
                <hr className="sub-title-ul"></hr>
                <p>
                    I am a frontend developer based in Sussex, 
                    UK. My specialties include <span className="bold-600">React JS</span>
                    , <span className="bold-600">Responsive Web Design</span>, and <span 
                    className="bold-600">API Integration</span>. I enjoy
                    building interactive, and beautifully-designed web-apps.
                </p>
            </div>
            <div className="content">
                <div className="section">
                    <h2>A little context...</h2>
                    <p>
                        Academically, I've always been drawn to Science. I graduated from 
                        the University of Southampton with a masters degree in Marine Biology.
                        My final one and a half years of study were during the COVID pandemic
                        and made me realise that without all the fieldwork and labwork I really
                        disliked the work and knew that this was what to expect in the workplace.
                        So, I decided to make a change.
                    </p>
                    <p>
                        I persued my passion for marine life working in the scuba diving industry 
                        for a year. Whilst doing so, I decided to learn to code. I was introduced
                        to coding in university, using R for data analysis and graphing. After 
                        meeting several professional developers and learning about what they do 
                        for a living, I knew that this was the career path for me.
                    </p>
                    <p>
                        Since December 2022, I have been training as a Frontend Developer with Scrimba 
                        and haven't looked back. I enjoy the creativity of the work, whilst feeling more 
                        knowledgeable about computer language and how they communicate with the internet. 
                        Now knowing a computer language, I'm driven to learn more and I have great aspirations 
                        for my career as a developer.
                    </p>
                </div>
                <div className="section">
                    <h2>Skills</h2>
                    <div className="skills">
                        {skillsHtml}
                    </div>
                    <div className="learn-more">
                        <h2>To learn more...</h2>
                        <Link to="/contact"><button>CONTACT ME</button></Link>
                    </div>
                </div>
            </div>

        </Main>
    )
}

export default About