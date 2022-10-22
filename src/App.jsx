import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './Components/ QuoteBox'
import Buttom from './Components/Buttom'


function App() {
   
  const [index, setIndex] = useState(Math.floor(Math.random()*quotes.length))
  const change=()=>{
    setIndex(Math.floor(Math.random()*quotes.length))
  }
  const color = [
    '#845AEC',
    '#5AC3EC',
    '#A3EC5A',
    '#EC5AB6',
    '#EC5A5C',
    '#C2EC5A',
    '#5A68EC',
    '#EC5AC0',
    '#5A6DEC',
    '#5AB9EC',
  ]
  const colors = Math.floor(Math.random()*color.length)
  document.body.style = `background: ${color[colors]}`
 
  return (
    <div className="App" style={{ color: color[colors] }}>

      <QuoteBox dex={index}/>
      <Buttom cambiar={change} color={color} colors={colors}/>
      
    </div>
  )
}

export default App
