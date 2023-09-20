import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import FavoritesContextProvider from './contexts/FavoritesContext'
import About from './pages/About/About'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'
import Episodes from './pages/Episodes/Episodes'
import Favorites from './pages/favorites/Favorites'
import HomePage from './pages/Homepage/Homepage';



function App() {
 

  return (
    
      <BrowserRouter>
      
        <FavoritesContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/details/:characterId' element={<CharacterDetails />} />
        </Routes>
        
        <Footer />
        </FavoritesContextProvider>
        
      </BrowserRouter>
    
  )
}

export default App