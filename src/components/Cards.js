import './Cards.css'


const Cards = ({
  setGetProps,
  getProps,
  setIsActive,
  toggle,
  isShowing,
  data
}) => {
  // console.log('test3', getProps)
  // console.log('test', toggle)
  // console.log('test2', isShowing)
  // console.log('test1', data)
  // console.log('test4', datas)
  const handleClick = data => {
    setGetProps(data)
    setIsActive(true)
    toggle()
     console.log('test2', getProps)
    // console.log('test poster', data.poster)
  }

  return (
    <div className='cards' onClick={() => handleClick(data)}>
      <img src={`http://image.tmdb.org/t/p/w200${data.poster_path}`} className='poster' alt='poster'></img>
      <div className='caption'>
        <h3 className='cardTitle'>
          {data.title}
          {` `}
          {data.release_date.slice(0,4)}
        </h3>
      </div>
    </div>
  )
}
export default Cards
