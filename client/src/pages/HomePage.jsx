import './homepage.css'

export default function HomePage() {
  return (
    <div>
      <form method='post' action='localhost:3000/airquality'>
        <label>
          <p className="form-text">State</p> 
          <input type='text' name='state' required />
        </label>

        <label>
          <p className="form-text">City</p> 
          <input type='text' name='city' required/>
        </label>

        <label>
          <p className="form-text">Zip Code</p> 
          <input type='text' name='zip-code' required/>
        </label>

        <div>
          <input type='submit' value='Send'/>
        </div>
      </form>
    </div>
  )
}