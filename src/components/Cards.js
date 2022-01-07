import './Cards.css'

const Cards = props => {
  return (
    <div className='cards'>
      <img src={props.poster} className='poster' alt='poster'></img>
      <div className='caption'>
        <h3>
          {props.title}
          {` `}
          {props.description}
        </h3>
      </div>
    </div>
  )
}
export default Cards
