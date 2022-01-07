import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Catalogue' element={<Catalogue />} >
          <Route path='/Catalogue/Films' element={<Films />} />
          {/* <Route path='/Series' element={<Series />} /> */}
        </Route>
        <Route path='/Films' element={<Films />} />
        <Route path='/MiniJeux' element={<MiniJeux />} />
      </Routes>
    </div>
  )
}

export default App
