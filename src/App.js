import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import useModale from './components/useModale'

function App() {
  const [emojiSelected, setEmojiSelected] = useState('')
  const [resultat, setResultat] = useState([])
  const [getProps, setGetProps] = useState({})
  const [getDetails, setGetDetails] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [casting, setCasting] = useState([])
  const [pegi, setPegi] = useState ([])
  const { isShowing, toggle } = useModale()

  const retourFunc = () => {
    toggle()
    setIsActive(!isActive)
  }

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
            />
          }
        />
        <Route
          path='/Catalogue'
          element={
            <Catalogue
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              resultat={resultat}
              setResultat={setResultat}
              getDetails={getDetails}
              setGetDetails={setGetDetails}
              getProps={getProps}
              setGetProps={setGetProps}
              isActive={isActive}
              setIsActive={setIsActive}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              retourFunc={retourFunc}
              isShowing={isShowing}
              toggle={toggle}
              casting={casting}
              setCasting={setCasting}
              setPegi={setPegi}
              pegi={pegi}
            />
          }
        />
        <Route
          path='/Films'
          element={
            <Films
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              resultat={resultat}
              setResultat={setResultat}
              getProps={getProps}
              setGetProps={setGetProps}
              getDetails={getDetails}
              setGetDetails={setGetDetails}
              isShowing={isShowing}
              toggle={toggle}
              isActive={isActive}
              setIsActive={setIsActive}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              retourFunc={retourFunc}
              casting={casting}
              setCasting={setCasting}
              setPegi={setPegi}
              pegi={pegi}
            />
          }
        />
        <Route
          path='/Series'
          element={
            <Series
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              resultat={resultat}
              setResultat={setResultat}
              getProps={getProps}
              setGetProps={setGetProps}
              getDetails={getDetails}
              setGetDetails={setGetDetails}
              isShowing={isShowing}
              toggle={toggle}
              setIsActive={setIsActive}
              isActive={isActive}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              retourFunc={retourFunc}
              casting={casting}
              setCasting={setCasting}
              setPegi={setPegi}
              pegi={pegi}
            />
          }
        />
        <Route
          path='/MiniJeux'
          element={
            <MiniJeux
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              resultat={resultat}
              setResultat={setResultat}
            />
          }
        />
        {/* <Route
          path='/FicheFilm'
          element={
            <CardFilm
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              resultat={resultat}
              setResultat={setResultat}
            />
          }
        /> */}
      </Routes>
    </div>
  )
}

export default App
