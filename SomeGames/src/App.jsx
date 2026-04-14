import { useState } from 'react'
import ThrowBackGames from './components/ThrowBackGames'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

function App() {

  const home = () => (
    <div>
      // display buttons of games in some grid/flex format
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path='/' element={home()} />
        <Route path='/genzchildhood' element={<ThrowBackGames />} />
      </Routes>
    </Router>
  )
}

export default App
