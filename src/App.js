import './App.css'
import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Catalogue' element={<Catalogue />} />
        <Route path='/Films' element={<Films />} />
        <Route path='/Series' element={<Series />} />
        <Route path='/MiniJeux' element={<MiniJeux />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
