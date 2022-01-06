import './App.css'
import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {
        function apiCall = (titleType, genre, apiKey) => {
          const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          return (
            fetch('https://imdb-api.com/API/AdvancedSearch/k_70cu350y?title_type=${titleType}&genres=${genre}&count=100', requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error))
          )
        }
      }
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
