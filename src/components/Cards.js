import './Cards.css'

const Cards = props => {
  return (
    <div className='cards' key={props.key}>
      <img src={props.poster} className='poster' alt='poster'></img>
      <div className='caption'>
        <h3 className='cardTitle'>
          {props.title}
          {` `}
          {props.description}
        </h3>
      </div>
    </div>
  )
}
export default Cards
