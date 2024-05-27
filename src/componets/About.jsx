import './componets.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function About(){
 
  useEffect(()=>{
AOS.init({duration: 2000})
  },[])
  return(
    <>
        <div className="containerforabout">
          <div className="left-side">

           <img className='aboutimg' src="../../selfie.jpg" alt="" />


        </div>
        <div className="right-side">
          <div className='textaboutme'>
          <h1 className='aboutme'>About Me</h1>
           <p className='animation'  data-aos-delay="300" data-aos="fade-up">My name is Moses Greenstein. I am front end web developer with a focus in javascript, html, and css. I have been designing websites since the fifth grade. The ability to create has always filled me with great pride. This pride was only elevated when showing something as unique and malleable as a website.   </p>
           <br />
           <br />
           <br />
           <p className='animation'  data-aos-delay="750" data-aos="fade-up">Since high school I have worked on various projects that have both enhanced my critical thinking ability and understanding of what makes a website visually appealing. In highschool I built a social media website and in my web design bootcamp I have built several websites solving many different problems.    </p>
           </div>
        </div>
        </div>
    
    </>
  )
}