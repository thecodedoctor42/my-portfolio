import React, {createContext} from "react";

import ShoppingList from "../assets/project-images/shopping-list.png"

import Quizzical from "../assets/project-images/quizzical.png"

import TravelJournal from "../assets/project-images/travel-journal.png"

import Tenzies from "../assets/project-images/tenzies.png"

import RestaurantApp from "../assets/project-images/erens-eatery.png"

import MovieWatchlist from "../assets/project-images/movie-watchlist.png"

import ColorPalette from "../assets/project-images/color-palette.png"

import LOTRBattleCards from "../assets/project-images/lotr-battle-cards.png"

import Oldagram from "../assets/project-images/oldagram.png"

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
            name: "Travel Journal", 
            src: TravelJournal
        },
        {
            name: "Tenzies", 
            src: Tenzies
        },
        {
            name: "Restaurant App", 
            src: RestaurantApp
        },
        {
            name: "Movie Watchlist", 
            src: MovieWatchlist
        },
        {
            name: "Color Palette", 
            src: ColorPalette
        },
        {
            name: "LOTR Battle Cards", 
            src: LOTRBattleCards
        },
        {
            name: "Oldagram", 
            src: Oldagram
        }
    ]

    return (
        <ProjectsContext.Provider value={{thumbnails}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export {ProjectsContext, ProjectsContextProvider}