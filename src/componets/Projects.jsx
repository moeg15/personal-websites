import './componets.css'
export default function Project({useRef}){
  return(
      <>
      <div ref={useRef} className='container2'>
        <div className='title'>
      <h1>Personal Projects</h1>
      </div>
      <div className='row'>
        <div className='col'>
       
      <img className='propic' src="../../MoeSite1.png" alt="" />
      <p>Moebook is a social media application in which one user draws the first half of a photo and the second user draws the second half before posting it.</p>
      </div>
      <div className='col'>
     <video className='propic'  controls loop muted autoPlay  src="../../video.mp4"></video>
      <p>this was an E-commerce website in which flowers were sold</p>

      </div>
      </div>
     
      </div>
      </>


  )
}