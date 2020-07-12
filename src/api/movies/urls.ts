const moviesId = 'https://api.themoviedb.org/3/movie/'
const moviesImg = 'https://image.tmdb.org/t/p/w300'
const moviesUrl = 'https://api.themoviedb.org/3/discover/movie'
const similarMovies = (id: number) => `https://api.themoviedb.org/3/movie/${id}/similar`

export const moviesUrls = {
  root: moviesUrl,
  img: moviesImg,
  id: moviesId,
  similar: similarMovies
}
