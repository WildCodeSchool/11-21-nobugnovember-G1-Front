function apiCall (titleType="movies&tv_series",genre,apiKey){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const urlApi = `https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${genre}&count=100`

    return fetch(urlApi, requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error))

  }

export default apiCall