import Carousel from "./components/Carousel"
import InstaSlider from "./components/Carousel"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import AboutUs2 from "./components/AboutUs2"
function App() {
  return (
    <div className="overflow-x-hidden">
      <Home/>
      <Services/>
      <About/>
      <Carousel />
      <AboutUs2 />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
