import { useState } from 'react'
import MusicGuesser from './components/MusicGuesser'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

function App() {
  const imgSrc = '../imgs/'

  const playlists = [
    {
      Name: 'Xyra',
      ID: '15875063041'
    },
    {
      Name: 'Holli',
      ID: '15698151261'
    },
    {
      Name: 'Gigi',
      ID: '15875066981'
    },
    {
      Name: 'Lilac',
      ID: '15875037561'
    },
    {
      Name: 'Elle',
      ID: '15875036001'
    }
  ]


  const links = playlists.map((p) => {
    return (
      <Link to={`/${p.Name}`}>
        <img src={`${imgSrc}${p.Name}.jpg`} style={{ width: '350px', cursor: 'pointer'}} />
      </Link>
    )
  })

  const paths = playlists.map((p) => {
    return (
      <Route path={`/${p.Name}`} element={<MusicGuesser id={p.ID} />} />
    )
  })

  const home = () => (
    <div>
      {links}
      {/* // display buttons of games in some grid/flex format */}
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path='/' element={home()} />
        {paths}
      </Routes>
    </Router>
  )
}

export default App
