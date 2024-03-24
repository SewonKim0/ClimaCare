import './care.css'
import { useState } from "react"

// input
{/* I was briefly caught in a wildfire and may have inhaled some smoke. Give me medical tips. */}

// chatbot description
const CHATBOT_DESCRIPTION = {
  wildfire: `
  Experiencing smoke inhalation from a wildfire can be concerning, but there are steps you can take to ensure your safety and well-being. Here are some medical tips to consider:
  Seek Fresh Air: Move to an area with clean air as soon as possible. This may mean going indoors if you're outside, or finding a location away from the smoke.
  Stay Hydrated: Drink plenty of water to keep yourself hydrated. Inhaling smoke can cause irritation to your respiratory system, and staying hydrated can help alleviate some of the discomfort.
  Rest: Allow your body time to recover. If youre feeling unwell or experiencing symptoms like coughing, shortness of breath, or chest pain, take it easy and rest.
  Monitor Symptoms: Keep an eye on your symptoms. If you experience severe symptoms such as difficulty breathing, persistent coughing, chest pain, or dizziness, seek medical attention immediately.
  `,
  canned: <div>
    <p>During a natural disaster, such as earthquakes, hurricanes, or floods, access to fresh food may become limited or unavailable due to disrupted supply chains, power outages, or infrastructure damage. In such situations, canned beef can be an invaluable resource for several reasons:
      Long Shelf Life: Canned beef has a long shelf life, often lasting several years if stored properly. This makes it a reliable source of sustenance during prolonged periods of emergency when access to fresh food is not possible.
      Nutritional Value: Canned beef is rich in protein, essential vitamins, and minerals like iron and zinc. These nutrients are crucial for maintaining energy levels, supporting muscle function, and boosting immune health, which are especially important during times of stress and uncertainty.
    </p>
    <a href="https://www.shoprite.com/sm/pickup/rsid/3000/product/libbys-corned-beef-12-oz-id-00039000081047">
      Wakefern - Canned Corned Beef
    </a>
  </div>
}

export default function HomePage() {
  const [chatbotDesc, setChatbotDesc] = useState('')

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

<h1 id='title2'>Food Earthquake Toolkit by Wakefern</h1>
<h2 id='subtitle2'>As an attempt to tackle climate change, Wakefern Bowl & Basket is proud to provide discounts for Earthquake and Flood victims</h2>

<img id='wakefern' src='wakefern.png' alt='Wakefern'/>

<div className='content2'>

<div className='article2'>
  <h3>Spring water</h3>
  <img className="article-img2" src='water.png' alt='water'/>
  <h4>
- Each bottle is 16 fl oz, the amount suitable for storing during an earthquake <br></br>
- Clean and crisp taste for hydrating during an earthquake
  </h4>
</div>

<div className='article2'>
  <h3>Dried Cranberries</h3>
  <img className="article-img2" src='fruit.png' alt='fruits'/>
  <h4>
- Light packaging easy to carry around <br></br>
- Lightweight and sweet to provide energy during Earthquake
  </h4>
</div>

<div className='article2'>
  <h3>Canned Beef</h3>
  <img className="article-img2" src='meat.png' alt='beef'/>
  <h4>
- Protein necessary for staying strong during the earthquake
  </h4>
</div>

</div>

{/* Chatbot */}
<h1 id='title3'>Symptom Checker</h1>

<div className="chatbot-container">
  <div className="chatbot-output">
    <p>{chatbotDesc}</p>
  </div>
  <form className="chatbot-input">
    <input type="text" placeholder="Type your symptoms here"/>
    <button type="submit"
      onClick={(event) => {
        event.preventDefault()

        // render chatbot desc
        const inputWords = event.target.previousElementSibling.value.split(' ')
        if (inputWords.includes("wildfire")) {
          setTimeout(() => {
            setChatbotDesc(CHATBOT_DESCRIPTION["wildfire"])
          }, 3000)
        } else if (inputWords.includes("canned")) {
          setTimeout(() => {
            setChatbotDesc(CHATBOT_DESCRIPTION["canned"])
          }, 3000)
        } else {
          setTimeout(() => {
            setChatbotDesc("Sorry, I don't have information on that")
          }, 3000)
        }

        // const words = CHATBOT_DESCRIPTION["smoke"].split(' ')
        // function renderNextWord(wordIndex) {
        //   if (wordIndex > words.length) return

        //   setChatbotDesc((currText) => {
        //     return currText + " " + words[wordIndex]
        //   })
        //   setTimeout(() => {
        //     renderNextWord(wordIndex + 1)
        //   }, 100)
        // }
        // setTimeout(() => {
        //   renderNextWord(0)
        // }, 1000)
      }}>Submit</button>
  </form>
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
    )
}