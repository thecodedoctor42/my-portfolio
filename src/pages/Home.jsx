import { useContext, useState } from "react"

// Import components
import Main from "../components/Main"
import { ProjectsContext } from "../components/ProjectsContext"
import data from "../data"

// Import images

import profileImg from "../assets/icons/android-chrome-512x512.png"
import htmlLogo from "../assets/logos/html-logo.png"
import cssLogo from "../assets/logos/css-logo.png"
import jsLogo from "../assets/logos/javascript-logo.png"
import reactLogo from "../assets/logos/react-logo.png"
import tailwindLogo from "../assets/logos/tailwind-logo.png"
import gitLogo from "../assets/logos/git-logo.png"
import { ThemeContext } from "../components/ThemeContext"

function Home() {

    const {theme} = useContext(ThemeContext)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function(){
        setWindowWidth(window.innerWidth)
    })

    const {thumbnails} = useContext(ProjectsContext)

    // Project template

    const projectsHtml = data.projects.map((project, index) => {while (index < 3) {
        const projectImg = thumbnails.find(thumbnail => thumbnail.name === project.name).src
        let skillsListHtml = []

        project.skills.forEach(skill => {
            skillsListHtml.push(
                <div className={`project-skill ${theme === 'light' ? 'dark' : 'light'}-theme`}> 
                    {skill}
                </div>
            )
        })
        return (
            <div key={project.id} id={project.id} className={`project ${theme}-theme reveal ${windowWidth < 620 ? 'fade-bottom' : project.id % 2 === 0 ?  'fade-right' : 'fade-left'}`}>
                <div className="project-title">
                    <h2>{project.name}</h2>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <i className="ri-github-fill"></i>
                    </a>
                </div>
                <div className="project-content">
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <img className='project-img' src={projectImg}/>
                    </a>
                    <div>
                        <p>{project.description}</p>
                        <div className="skills-used">
                            {skillsListHtml}
                        </div>
                    </div>
                </div>
            </div>
        )
    }})

    // Reveal animation function

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementHeight = reveals[i].getBoundingClientRect().height;
        
            if (elementTop < windowHeight - elementHeight / 2) {
                reveals[i].classList.add("active");
            }
        }
    }
    
    window.addEventListener("scroll", reveal);

    return (
        <Main>

            {/* Hero */}

            <div className="home-hero hex-bg">
                <div className="profile-img-cnt">
                    <img className="profile-img" src={profileImg}></img>
                </div>
                <div className="home-hero-text">
                    <h1 className="bold-600">HI, I&apos;M ANTONI OZTURK</h1>
                    <p>
                        A passionate <span className="bold-600">Frontend React Developer</span> based in Sussex, 
                        UK.  I enjoy building interactive responsively-designed web-apps with engaging animations.
                    </p>
                    <div className="tech-stack">
                        <span className="bold-600 big-text">Tech Stack |</span>
                        <img className="tech-stack-img" src={htmlLogo}></img>
                        <img className="tech-stack-img" src={cssLogo}></img>
                        <img className="tech-stack-img" src={jsLogo}></img>
                        <img className="tech-stack-img" src={reactLogo}></img>
                        <img className="tech-stack-img" src={tailwindLogo}></img>
                        <img className="tech-stack-img" src={gitLogo}></img>
                    </div>
                    <button className="hire-btn" onClick={() => document.getElementById("home-contact").scrollIntoView()}>HIRE ME</button>
                </div>
                <div className="mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </div>

            {/* Everything other than hero */}

            <div className="home-content">

                {/* About */}

                <section id="home-about">
                    <h1 className="bold-600">About</h1>
                    <div className="home-about">
                        <h2 className="bold-600 reveal fade-left">A little context...</h2>
                        <div className="about-grid right reveal fade-left">
                            <div></div>
                            <span className="main-text">
                                 Mastered in Marine Biology at the University of Southampton. During my degree I learnt and applied R (programming language) for statistical computing and graphing datasets throughout my degree.
                            </span>
                            <span className="side-text">JUL 21</span>
                        </div>
                        <div className="about-grid left reveal fade-right">
                            <span className="side-text">OCT 22</span>
                            <span className="main-text">
                                 Became a divemaster and store assistant at Andark Diving and Watersports center. Started learning Python in my free time to continue developing my skills as a programmer. 
                            </span>
                        </div>
                        <div className="about-grid right reveal fade-left">
                            <div></div>
                            <span className="main-text">
                                 Journeyed to Mallorca to experience life in a different part of the world with a backpack full of clothes and my laptop. Began an introduction to web development course.
                            </span>
                            <span className="side-text">AUG 23</span>
                        </div>
                        <div className="about-grid left reveal fade-right">
                            <span className="side-text">NOV 23</span>
                            <span className="main-text">
                                 Returned to to the UK bright eyed, tanned and shaggy haired with a new found purpose in life. To become a remote frontend developer. So that, I could travel and see more of the world.
                            </span>
                        </div>
                        <div className="about-grid right reveal fade-left">
                            <div></div>
                            <span className="main-text">
                                 Signed up to Scrimba&apos;s &apos;Frontend Developer Career Path&apos; to focus my determination into an achievable course that would provide me with the tools I required to build solid foundations for my developer career.
                            </span>
                            <span className="side-text">DEC 23</span>
                        </div>
                        <div className="about-grid left reveal fade-right">
                            <span className="side-text">JUL 23</span>
                            <span className="main-text">
                                 Completed the &apos;Frontend Developer Career Path&apos; and now proud to say that I am a confident qualified Frontend React Developer.
                            </span>
                        </div>
                        <div className="about-grid right reveal fade-left">
                            <div></div>
                            <span className="main-text">
                                 Developing my skills further by continuing to build bigger and better websites/web-apps using new and exciting concept and techniques I learn along the way.
                            </span>
                            <span className="side-text">NOW</span>
                        </div>
                    </div>
                </section>

                {/* Projects */}

                <section id="home-projects">
                    <h1>Projects</h1>
                    <div className="home-projects">
                        {projectsHtml}
                    </div>
                </section>

                {/* Contact */}

                <section id="home-contact">
                    <h1>Contact</h1>
                    <div className="home-contact">
                        <h3 className="reveal fade-bottom">Please, get in touch if you&apos;d like to learn more about me and my projects, or even just to chat; I love to talk tech.</h3>
                        <div className="contact-list">
                            <p className={`reveal ${windowWidth < 620 ? 'fade-bottom' : 'fade-left'}`}>< i className="ri-mail-fill"></i>antoniozturk98@gmail.com</p>
                            <p className={`reveal ${windowWidth < 620 ? 'fade-bottom' : 'fade-right'}`}>
                                <i className="ri-github-fill"></i>
                                <a href="https://github.com/thecodedoctor42" target="_blank" rel="noreferrer">
                                    github.com/thecodedoctor42
                                </a>
                            </p>
                            <p className={`reveal ${windowWidth < 620 ? 'fade-bottom' : 'fade-left'}`}>
                                < i className="ri-linkedin-fill"></i> 
                                <a href="https://www.linkedin.com/in/antoni-ozturk-bbba81258/" target="_blank" rel="noreferrer">linkedin.com/in/antoni-ozturk</a>
                            </p>
                            <p className={`reveal ${windowWidth < 620 ? 'fade-bottom' : 'fade-right'}`}>< i className="ri-phone-fill"></i>+(44)7450562170</p>
                        </div>
                        <a className="code-link reveal fade-bottom" href="https://github.com/thecodedoctor42/my-portfolio" target="_blank" rel="noreferrer">View website source code</a>
                    </div>
                </section>
            </div>
        </Main>
    )
}

export default Home