const page = 1
const adult = false
const video = false
const language = 'en-US'
const sortVideo = 'popularity.desc'
const apiKey = 'e8ae59d95e445da13e5a518624ac0972'

const moviesOptions = {
  page,
  language,
  api_key: apiKey,
  sort_by: sortVideo,
  include_adult: adult,
  include_video: video
}
const similarMoviesOptions = {
  page,
  language,
  api_key: apiKey
}
const moviesIdOptions = {
  language,
  api_key: apiKey
}

export const moviesOpt = {
  movies: moviesOptions,
  movieInfo: moviesIdOptions,
  moviesSimilar: similarMoviesOptions
}
