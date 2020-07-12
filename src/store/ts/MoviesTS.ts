export interface Movie {
  id: number
  img: string
  title: string
  releaseDate: string
}

export interface MoviesSate {
  error: string
  isLoading: boolean
  list: Movie[]
}
