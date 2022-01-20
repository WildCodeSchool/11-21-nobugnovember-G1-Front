import Home from './screens/Home'
import Catalogue from './screens/Catalogue'
import Series from './screens/Series'
import Films from './screens/Films'
import MiniJeux from './screens/MiniJeux'
import Quizz from './components/Quizz'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import { useState } from 'react'
import useModal from './components/useModal'
import CardFilm from './components/CardFilm'

function App() {
  // POUR MODAL
  let location = useLocation()
  let navigate = useNavigate()
  let backgroundLocation = location.state && location.state.backgroundLocation

  const [link,setLink]=useState('/catalogue')

  const [emojiSelected, setEmojiSelected] = useState('')
  const [resultat, setResultat] = useState([])
  const [getProps, setGetProps] = useState({})
  const [getDetails, setGetDetails] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [casting, setCasting] = useState([])
  const [playerName, setPlayerName] = useState()
  
  const [pegi, setPegi] = useState([])
  const { isShowing, toggle } = useModal()

  const retourFunc = () => {
    toggle()
    navigate(-1)
    setIsActive(!isActive)
  }

  return (
    <div className='App'>
      <Routes location={backgroundLocation || location}>
        <Route
          path='/'
          element={
            <Home
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              link={link}
              setLink={setLink}
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
              link={link}
              setLink={setLink}
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
              link={link}
              setLink={setLink}
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
              link={link}
              setLink={setLink}
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
              setPlayerName={setPlayerName}
              link={link}
              setLink={setLink}
            />
          }
        />
        <Route
          path='/MiniJeux/Quizz'
          element={
            <Quizz emojiSelected={emojiSelected}
            setEmojiSelected={setEmojiSelected}
            resultat={resultat}
            setResultat={setResultat}
            playerName={playerName}
            setPlayerName={setPlayerName}
            link={link}
            setLink={setLink}/>
          }
        />
        {/* <Route
          path='/MiniJeux/Blindtest'
          element={
            <MiniJeux
              emojiSelected={emojiSelected}
              setEmojiSelected={setEmojiSelected}
              resultat={resultat}
              setResultat={setResultat}
            />
          }
        /> */}
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

      {backgroundLocation && (
        <Routes>
          <Route
            path='/card/:id'
            element={
              <CardFilm
                getProps={getProps}
                retourFunc={retourFunc}
                isShowing={isShowing}
                getDetails={getDetails}
                casting={casting}
                setCasting={setCasting}
                setPegi={setPegi}
              />
            }
          />
        </Routes>
      )}
    </div>
  )
}

export default App
