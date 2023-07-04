import React,{ useContext } from "react"

import Main from "../components/Main"
import { ProjectsContext } from "../components/ProjectsContext"
import data from "../data"
import { Link } from "react-router-dom"

function Home() {
    const {thumbnails} = useContext(ProjectsContext)

    const projectsHtml = data.projects.map((project, index) => {while (index < 3) {
        const projectObject = thumbnails.find(thumbnail => thumbnail.name === project.name)
        const projectImg = projectObject.src
        return (
            <div key={project.id} id={project.id} className="project">
                <img className="project-img" src={projectImg}/>
                <Link to={`/projects/${project.id}`}>
                    <h2>{project.name}</h2>
                </Link>
            </div>
        )
    }})
    return (
        <Main>
            <div className="home-about hex-bg">
                <h1>HI, I'M ANTONI OZTURK</h1>
                <hr className="sub-title-ul"></hr>
                <p>
                    I am a frontend developer based in Sussex, 
                    UK. My specialties include <span className="bold-600">React JS</span>
                    , <span className="bold-600">Responsive Web Design</span>, and <span 
                    className="bold-600">API Integration</span>. I enjoy
                    building interactive and beautifully-designed web-apps.
                </p>
                <div className="mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </div>
            <div className="home-content">
                <h1>Projects</h1>
                <div className="home-projects">
                    {projectsHtml}
                </div>
                <Link to="/projects"><button className="more-btn">SHOW MORE</button></Link>
            </div>
            <div className="learn-more">
                <h3>To learn more...</h3>
                <Link to="/contact"><button>CONTACT ME</button></Link>
            </div>
        </Main>
    )
}

export default Home