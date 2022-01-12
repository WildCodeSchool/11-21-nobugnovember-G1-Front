import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import CardFilm from './components/CardFilm'
import CardSerie from './components/CardSerie'
import { Routes, Route } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
function App() {
  const [emojiSelected,setEmojiSelected]=useState('')
  const [resultat, setResultat] = useState([])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected}/>} />
        <Route path='/Catalogue' element={<Catalogue emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected} resultat={resultat} setResultat={setResultat}/>} />
        <Route path='/Films' element={<Films emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected} resultat={resultat} setResultat={setResultat}/>} />
        <Route path='/Series' element={<Series  emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected} resultat={resultat} setResultat={setResultat}/>} />
        <Route path='/MiniJeux' element={<MiniJeux emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected} resultat={resultat} setResultat={setResultat}/>} />
        <Route path='/FicheFilm' element={<CardFilm emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected} resultat={resultat} setResultat={setResultat}/>} />
        <Route path='/FicheSerie' element={<CardSerie emojiSelected={emojiSelected} setEmojiSelected={setEmojiSelected} resultat={resultat} setResultat={setResultat}/>} />
      </Routes>
    </div>
  )
}

export default App
