import './divider.css'
export default function Divider(){
  return(
    <>
      <section className="tilt">
        <div className="left-half">
          <div className='javascript'>
          <img className='test1234' src="../../javascript.png" alt="JavaScript logo" />
            <p>Javascript</p>
          </div>
          <div className='react'> 
          <img className='test1234' src="../../react.png" alt="react logo" />
          <p>React</p>
          </div>
        </div>
        <div className="center-content">
          <h1>Skills</h1>
        </div>
        <div className='right-half'>
          <div className='html'>
          <img className='test1234' src="../../html.png" alt="html logo" />
          <p>html</p>
          </div>
          <div className='css'>
          <img className='test1234' src="../../css.png" alt="css logo" />
          <p>css</p>
          </div>
        </div>
      </section>
    </>
  );
}
