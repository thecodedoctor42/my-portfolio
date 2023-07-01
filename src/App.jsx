// Import React components
import React from 'react'
import {Routes, Route} from "react-router-dom"

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import { ProjectsContextProvider } from './components/ProjectsContext'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/projects/Projects'
import ProjectsDetail from './pages/projects/ProjectsDetail'
import Contact from './pages/Contact'


function App() {

  return (
    <ProjectsContextProvider>
      <Header />
      <Routes>
        <Route 
          exact 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/about'
          element={<About />}
        />
        <Route 
          exact 
          path='/projects'
          element={<Projects />}
        />
        <Route 
          path="/projects/:projectId"
          element={<ProjectsDetail />}
          
        />
        <Route  
          path='/contact'
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </ProjectsContextProvider>
  )
}

export default App
