
import Home from "./componets/Home"
import About from "./componets/About"
import Project from "./componets/Projects"
import ParaScroll from "./componets/ParaScroll"
import Divider from "./componets/Divider"
import ContactMe from "./componets/ContactMe"
import { useRef } from "react"
import Test from "./componets/Test"
function App() {
const about = useRef(null);
const project = useRef(null);
const contact = useRef(null);



const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth'
  })
}
  return (
    <>
   
      <Home scrollToSection={scrollToSection} about={about} project={project} contact={contact}/>
      <ParaScroll/>
      <About useRef={about}/>
      <Divider/>
      <Project useRef={project}/>
      <Test useRef={contact}/>
      <ContactMe/>
    </>
  )
}

export default App
