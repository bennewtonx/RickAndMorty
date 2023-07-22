import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
  <Header />
  <Homepage />
  <Footer />
    </>
  )
}

export default App
