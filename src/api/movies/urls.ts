const moviesImg = 'https://image.tmdb.org/t/p/'
const moviesId = 'https://api.themoviedb.org/3/movie/'
const moviesUrl = 'https://api.themoviedb.org/3/discover/movie'

const moviesImgUrl = (size = 'original') => `${moviesImg}${size}`
const similarMovies = (id: number) => `https://api.themoviedb.org/3/movie/${id}/similar`

export const moviesUrls = {
  root: moviesUrl,
  id: moviesId,
  img: moviesImgUrl,
  similar: similarMovies
}
