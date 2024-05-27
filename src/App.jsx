
import Home from "./componets/Home"
import About from "./componets/About"
import Project from "./componets/Projects"
import ParaScroll from "./componets/ParaScroll"
import Divider from "./componets/Divider"
import { useRef } from "react"
function App() {
const about = useRef(null);
const project = useRef(null);

const scrolltoSection = (elementRef) => {
  window.scrollTo({
    top:elementRef.current.offsetTop,
    behavior: 'smooth'
  })
}
  return (
    <>
      <Home scrolltoSection={scrolltoSection} about={about} project={project}/>
      <ParaScroll/>
      <About useRef={about}/>
      <Divider/>
      <Project useRef={project}/>
    </>
  )
}

export default App
