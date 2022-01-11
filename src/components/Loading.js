import './Loading.css'
import loading from '../assets/loadingImg.png'

const Loading = () => {
  return (
    <div className='loading-container'>
      <img className='loading-img' src={loading} alt='Loading' />
    </div>
  )
}
export default Loading
