export interface IMovie {
  id: number
  img: string
  title: string
  releaseDate: string
}

export interface IMovieInfo extends IMovie {
  rating: string
  overview: string
}

export interface IMoviesSate {
  error: string
  isLoaded: boolean
  isLoading: boolean
  list: IMovie[]
}

export interface IMovieDetailState extends Omit<IMovie, 'id' | 'img'> {
  error: string
  rating: string
  overview: string
  id?: string | boolean
  img: string | boolean
  isLoaded: boolean
  isLoading: boolean
}

export interface MovieResponse {
  id: number
  title: string
  backdrop_path: string
  release_date: string
}
