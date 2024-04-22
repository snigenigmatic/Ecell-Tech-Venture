import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'

function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <div className='w-full h-screen'>
          <Hero/>
        </div>
      </div>
    </>
  )
}

export default App
