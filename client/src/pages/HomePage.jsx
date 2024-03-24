import './homepage.css';
import { useState } from "react";

export default function HomePage({ userEmail }) {
  const [showMap, setShowMap] = useState(false);

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

          <img
            className="ptr"
            src="icon.gif"
            alt="A ptr"
          />         
        </div>
    </div>

    <footer>
          <div class='col1'>
            <div class="logo2-container">
              <img id='logo2' src ='logo.png' alt='Smart Cycle Logo'/>
            </div>
            
            <div class='form'>
              <h3>Stay up-to-date with our monthly newsletter</h3>
              <form action='#' method ='post2' class = 'newsletter'/>
              <label for ='email'>Email</label>
              <input type ='email' id ='email' name = 'email' placeholder='Your Email Address' required/>
            </div>
          </div>
          
          <div class='credit'>
            <h2>Created by</h2>
            <p>Sewon Kim</p>
            <p>Alex Jia</p>
            <p>Kathy Tran</p>
          </div>
        </footer>
    </>
  );
}
