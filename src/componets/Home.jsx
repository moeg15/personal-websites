import './componets.css'
import { useState } from 'react';

export default function Home(props) {
  const stylingArray = ["dropDown1", "dropDown2"];
  const [dropdown, setDropdown] = useState(true);
  let dropDownState = dropdown ? stylingArray[0] : stylingArray[1];
  
  const changeDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="container">
      <div className="greybox">
        <div className="ProfilePic">
          <img 
            className="img" 
            src="../../test.jpg" 
            alt="" 
            onClick={changeDropDown} 
          />
          <div className={dropDownState}>
            <ul>
            <li onClick={() => props.scrolltoSection( props.about)}>about</li>

              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
            
          </div>
        </div>
        <h1 className='nametitle'>Moses Greenstein</h1>
      </div>
      <div className='centerPage'>
        <div className="waviy">
          <span className='black' style={{ animationDelay: '0.1s' }}>w</span>
          <span className='black' style={{ animationDelay: '0.2s' }}>e</span>
          <span className='black' style={{ animationDelay: '0.3s' }}>b</span>
          <span style={{ animationDelay: '0.4s' }}>d</span>
          <span style={{ animationDelay: '0.5s' }}>e</span>
          <span style={{ animationDelay: '0.6s' }}>v</span>
          <span style={{ animationDelay: '0.7s' }}>e</span>
          <span style={{ animationDelay: '0.8s' }}>l</span>
          <span style={{ animationDelay: '0.9s' }}>o</span>
          <span style={{ animationDelay: '1.0s' }}>p</span>
          <span style={{ animationDelay: '1.1s' }}>e</span>
          <span style={{ animationDelay: '1.2s' }}>r</span>
        </div>
      </div>
    </div>
  );
}
