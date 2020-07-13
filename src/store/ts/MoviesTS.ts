export interface Movie {
  id: number
  img: string
  title: string
  releaseDate: string
}

export interface MoviesSate {
  error: string
  isLoaded: boolean
  isLoading: boolean
  list: Movie[]
}

export interface MovieDetailState extends MoviesSate {
  id: string | boolean
  rating: string
  overview: string
}
