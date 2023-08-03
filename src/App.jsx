// Import React components
import {Routes, Route} from "react-router-dom"

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import { ProjectsContextProvider } from './components/ProjectsContext'

// Import Pages
import Home from './pages/Home'

function App() {

  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (
    <ProjectsContextProvider>
      <Header />
      <Routes>
        <Route 
          exact
          path='/'
          element={<Home />}
        />
      </Routes>
      <Footer />
    </ProjectsContextProvider>
  )
}

export default App
