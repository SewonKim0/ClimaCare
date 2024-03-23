import './homepage.css';

export default function HomePage({ userEmail }) {
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

        <input className="form-submit" type='submit' value='Send'/>
      </form>
    </div>
  );
}
