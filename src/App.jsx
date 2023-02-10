import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data.js'


export default function App() {
  const cardArr = cardData.map(item=>{ 
    return <Card  
              key={item.id}
              item={item}/>
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="cards-container">
        {cardArr}
      </div>
    </div>
  )
}


