import { useContext } from "react"

import { ThemeContext } from "./ThemeContext"


function Main(props) {
    const {theme} = useContext(ThemeContext)
     
    return (
        <main id="top" className={`${theme}-theme`}>
            {props.children}
        </main>
    )
}

export default Main
