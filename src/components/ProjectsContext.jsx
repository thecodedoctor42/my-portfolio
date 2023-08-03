import {createContext} from "react";

import ShoppingList from "../assets/project-images/shopping-list.png"

import Quizzical from "../assets/project-images/quizzical.png"

import MovieWatchlist from "../assets/project-images/movie-watchlist.png"

const ProjectsContext = createContext()

function ProjectsContextProvider({children}){

    const thumbnails = [
        {
            name: "Shopping List", 
            src: ShoppingList
        },
        {
            name: "Quizzical", 
            src: Quizzical
        },
        {
            name: "Movie Watchlist", 
            src: MovieWatchlist
        }
    ]

    return (
        <ProjectsContext.Provider value={{thumbnails}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export {ProjectsContext, ProjectsContextProvider}