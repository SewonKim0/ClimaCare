import './homepage.css';
import { useState } from "react";

export default function HomePage({ userEmail }) {
  const [showMap, setShowMap] = useState(false);

  return (
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
        </div>
    </div>
  );
}
