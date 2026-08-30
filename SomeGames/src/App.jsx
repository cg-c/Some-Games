import { useState } from 'react'
import MusicGuesser from './components/MusicGuesser'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

function App() {

  const home = () => (
    <div>
      {/* // display buttons of games in some grid/flex format */}
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path='/' element={home()} />
        <Route path='/Holli' element={<MusicGuesser />} />
      </Routes>
    </Router>
  )
}

export default App
