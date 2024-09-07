import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'


function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <div className='w-svh h-svh'>
          <Hero/>
        </div>
        <div className='flex flex-row bg-gradient-to-tr from-blue-400 toblue-950'>
          <div className='flex flex-row w-1/2 h-1/4 px-3 py-3'>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
