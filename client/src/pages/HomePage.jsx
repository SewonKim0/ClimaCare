import './homepage.css'

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page.</p>

      <form method='post' action='http://localhost:3000/airquality'>
        {/* <label>
          State 
          <input type='text' name='state' required />
        </label>

        <label className="form-field">
          <p>City</p> 
          <input type='text' name='city' required/>
        </label> */}

        <label>
          Zip Code
          <input type='text' name='zipcode' required/>
        </label>

        <div>
          <input type='submit' value='Send'/>
        </div>
      </form>
    </div>
  )
}