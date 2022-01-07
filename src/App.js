import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import { Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
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
    </div>
  )
}

export default App
