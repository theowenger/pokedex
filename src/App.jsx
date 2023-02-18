//Framework
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Pokedex from './components/pokedex/pokedex';
import IndexPage from './pages/index-page'
import Header from './components/header/header';
import PokemonView from './pages/pokemon-view';
import './index.css'

function App() {
  return (

    <div className='main-container'>
      <Router>
        <Header />
        <Pokedex>
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/pokemon/:id' element={<PokemonView />} />
          </Routes>
        </Pokedex>
      </Router>
    </div>
  )
}

export default App;
