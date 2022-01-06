function apiCall (titleType,genre,apiKey){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    return (
      fetch(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${genre}&count=100`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    )
  }
export default apiCall;