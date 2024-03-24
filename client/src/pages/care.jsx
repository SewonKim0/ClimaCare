import './care.css'

export default function HomePage() {
    return (
<>
<h1 className="title">How to take care of yourself in this situation</h1>
<h2 className="subtitle">Richmond Earthquake</h2>
<div className='content'>

<div className='article'>
  <h3>Before</h3>
  <img className="article-img" src='1.png' alt='before'/>
  <h4>
- Find a fire extinguisher <br></br>
- Learn first aid <br></br>
- Turn off the gas, water, and electricity <br></br>
- Don't leave heavy objects on shelves
  </h4>
</div>

<div className='article'>
  <h3>During</h3>
  <img className="article-img" src='2.png' alt='during'/>
  <h4>
- Stay where you are <br></br>
- Stand against a wall near the center of the building <br></br>
- Stay in the open away from power lines or anything that might fall <br></br>
- Don't use matches, candles, or any flame
  </h4>
</div>

<div className='article'>
  <h3>After</h3>
  <img className="article-img" src='3.png' alt='after'/>
  <h4>
- Turn on the radio <br></br>
- Stay out of damaged buildings <br></br>
- Be careful around broken glass and debris <br></br>
- Be careful of chimneys (they may fall on you) <br></br>
- Stay away from beaches <br></br>
  </h4>
</div>

</div>

<table>
    <tr>
        <th>Possible Symptoms</th>
        <th>Suggestions</th>
    </tr>

    <tr>
        <th>Faint/dizzy/nauseous</th>
        <th>Visit </th>
    </tr>

    <tr>
        <th>panicky/panic attacks/scared</th>
        <th>Contact</th>
    </tr>
</table>

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
    )
}