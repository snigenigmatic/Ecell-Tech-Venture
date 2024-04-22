import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Carousel from './assets/components/Carousel'

function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <div className='w-full h-screen'>
          <Hero/>
        </div>
        <div className='w-svw h-svh'>
          {/* Carousel */}
          
        </div>
      </div>
    </>
  )
}

export default App
