import React, {useContext} from "react"
import data from "../../data.js"
import { Link } from "react-router-dom"

import Main from "../../components/Main.jsx"
import { ProjectsContext } from "../../components/ProjectsContext.jsx"

function Projects() {
    
    const {thumbnails} = useContext(ProjectsContext)

    const projectsHtml = data.projects.map(project => {
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
    })

    return (
        <Main >
            <div className="intro hex-bg">
                <h1>PROJECTS</h1>
                <hr className="sub-title-ul"></hr>
            </div>
            <div className="content">
                <div className="projects">
                    {projectsHtml}
                </div>
            </div>
        </Main>
    )
}

export default Projects