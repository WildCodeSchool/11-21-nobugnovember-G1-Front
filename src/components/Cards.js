import './Cards.css'

const Cards = ({ setGetProps, setIsActive, toggle, data }) => {
  const handleClick = data => {
    setGetProps(data)
    setIsActive(true)
    toggle()
  }

  return (
    <div className='cards' onClick={() => handleClick(data)}>
      <img src={data.image} className='poster' alt='poster'></img>
      <div className='caption'>
        <h3 className='cardTitle'>
          {data.title}
          {` `}
          {data.description}
        </h3>
      </div>
    </div>
  )
}
export default Cards
