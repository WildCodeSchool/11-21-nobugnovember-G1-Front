import './App.css'
import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Catalogue' element={<Catalogue />} />
      </Routes>
    </div>
  )
}

export default App
