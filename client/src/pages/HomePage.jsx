import './homepage.css'

export default function HomePage() {
  return (
    <div>
      <form method='post' action='localhost:3000/airquality'>
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
          <input type='text' name='zip-code' required/>
        </label>

        <div>
          <input type='submit' value='Send'/>
        </div>
      </form>
    </div>
  )
}