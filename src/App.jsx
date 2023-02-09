import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data.js'


export default function App() {
  const cardArr = cardData.map(x=>{ 
    return <Card 
              img={'../../public/assets/'+x.coverImg} 
              key={x.id}
              item={x}/>
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


