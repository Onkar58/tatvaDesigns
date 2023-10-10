import Carousel from "./components/InstaSlider"
import InstaSlider from "./components/InstaSlider"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="overflow-x-hidden">
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
