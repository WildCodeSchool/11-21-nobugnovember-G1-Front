const ActorCard = ({ getDetails }) => {
  const myArray = []

  return (
    <div className='castingListe'>
      {getDetails.actorList !== undefined
        ? getDetails.actorList.slice(0, 5).map(actor => (
            <div className='infoCasting'>
              <div className='divCarre'>
                <img src={actor.image} className='imgCast' alt='casting'></img>
              </div>
              <p className='actorName'>{actor.name}</p>
              <p className='roleName'>{actor.asCharacter}</p>
            </div>
          ))
        : ''}
    </div>
  )
}

export default ActorCard
