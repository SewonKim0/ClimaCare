import './homepage.css';
import { useState } from "react";

// pointers data
const POINTERS_DATA = [
  {
    left: "30%",
    top: "50%",
    content: <div>
      <h2>Potential Earthquake</h2>
      <ul>
        <li> Impact Radius: 2km </li>
        <li> Air Quality: 1 </li>
        <li> Safety: avoid high-rise buildings, stay in open areas </li>
      </ul>  
    </div>
  },
  {
    left: "70%",
    top: "75%",
    content: <div>
      <h2>Flood Warning</h2>
      <ul>
        <li> High Water Levels: ~3 inches of rainfall above yearly average </li>
        <li> Air Quality: 3 </li>
        <li> Impact Radius: 14km </li>
        <li> Expect humid climates, avoid low ground </li>
      </ul>  
    </div>
  },
  {
    left: "85%",
    top: "15%",
    content: <div>
      <h2>Potential Hurricane</h2>
      <ul>
        <li> Hurricane Formation Risk: moderate/high </li>
        <li> Air Quality: 3 </li>
        <li> Impact Radius: 4km </li>
        <li> Take cover inside reinforced buildings, avoid remote areas </li>
      </ul>  
    </div>
  }
]

export default function HomePage({ userEmail }) {
  const [showMap, setShowMap] = useState(false);
  // pointers modal state data
  const [ ptrIndex, setPtrIndex ] = useState(0);
  const [ showModal, setShowModal ] = useState(false);
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <>
    <h1 id='title'>Welcome to ClimaCare</h1>
    <div>
      <form method='post' action='http://localhost:3000/airquality'>
        {/* Logo */}
        <div className="form-logo">
          <img
            src="logo.png"
            alt="Image of the climacare logo"
          />
        </div>

        <h2 className="form-title"> Enter Your Location: </h2>

        <label className="form-field">
          <p>State</p>
          <input type='text' name='state' required />
        </label>

        <label className="form-field">
          <p>City</p> 
          <input type='text' name='city' required/>
        </label>

        <label className="form-field">
          <p>Zip Code</p>
          <input type='text' name='zipcode' required/>
        </label>

        <input className="form-submit" type='submit' value='Send'
          onClick={() => {
            setShowMap(true)
          }}/>
      </form>

      {/* Map */}
      <div className="map"
        style={{
          height: showMap ? '14rem' : '0rem',
        }}>
          <img
            src="richmond.png"
            alt="An image of the map"
          />

          {/* Pointers */}
          {POINTERS_DATA.map((pointerData, pointerIndex) => (
            <div className="ptr" 
              onClick={() => {
                setPtrIndex(pointerIndex)
                setShowModal(true)
                setTimeout(() => {
                  setModalVisible(true)
                }, 100)
              }}
              key={pointerIndex} 
              style={{
                left: pointerData.left,
                top: pointerData.top,
              }}>

              <img
                src="icon.png"
                alt="An image of a pointer"
              />
            </div>
          ))}

          {/* Pointers Modal */}
          <div className="pointers-modal"
            style={{
              display: showModal ? 'block' : 'none',
              opacity: modalVisible ? 1 : 0,
            }}>
            {POINTERS_DATA[ptrIndex].content}

            <button className="modal-close"
              onClick={() => {
                setModalVisible(false)
                setTimeout(() => {
                  setShowModal(false)
                }, 600)
              }}> Close
            </button>
          </div>
          <div className="pointers-bg"
            style={{
              display: showModal ? 'block' : 'none',
              opacity: modalVisible ? 1 : 0,
            }}></div>
        </div>
    </div>

    <footer>
          <div className='col1'>
            <div className="logo2-container">
              <img id='logo2' src ='logo.png' alt='Smart Cycle Logo'/>
            </div>
            
            <div className='form'>
              <h3>Stay up-to-date with our monthly newsletter</h3>
              <form action='#' method ='post2' class = 'newsletter'/>
              <label for ='email'>Email</label>
              <input type ='email' id ='email' name = 'email' placeholder='Your Email Address' required/>
            </div>
          </div>
          
          <div className='credit'>
            <h2>Created by</h2>
            <p>Sewon Kim</p>
            <p>Alex Jia</p>
            <p>Kathy Tran</p>
          </div>
        </footer>
    </>
  );
}
