import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Episodes from './pages/Episodes/Episodes';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='About' element={<About />}/>
      <Route path='Episodes' element={<Episodes />}/>
      <Route path='/details/:characterId' element={<CharacterDetails />}/>
    </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
