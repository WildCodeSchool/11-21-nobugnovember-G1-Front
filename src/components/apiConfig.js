const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '430fd4a9e11f41d3009ea74bba3edc1a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;