import React, {useContext} from "react"
import { useParams, useNavigate } from "react-router-dom"

import Main from "../../components/Main"
import data from "../../data"
import { ProjectsContext } from "../../components/ProjectsContext"
import netlifyIcon from "../../assets/netlify.png"

export default function ProjectsDetail() {

    const {thumbnails} = useContext(ProjectsContext)
    const {projectId} = useParams()
    const thisProject = data.projects.find( project => project.id === projectId )
    const projectObject = thumbnails.find(thumbnail => thumbnail.name === thisProject.name)
    const projectImg = projectObject.src
    const navigate = useNavigate()

    return (
        <Main >
            <div className="content-project">
                <img className="project-img" src={projectImg}/>
                <div className="project-title">
                    <a href={thisProject.url} target="_blank">
                        <img className="netlify-i" src={netlifyIcon}/>
                    </a>
                    <h2>{thisProject.name}</h2>
                    <a href={thisProject.github} target="_blank">
                        <i className="ri-github-fill"></i>
                    </a>
                </div>
                <p className="project-description">{thisProject.description}</p>
                <button onClick={() => navigate("/projects")}>Go back</button>
            </div>
        </Main>
    )
}