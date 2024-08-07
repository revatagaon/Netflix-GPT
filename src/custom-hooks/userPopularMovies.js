import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constants"
import { addPopularMovies } from "../store/movieSlice"

const usePopularMovies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getPopularMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPopularMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTION)
      const json = await data.json()
      dispatch(addPopularMovies(json.results))
    } catch (error) {
      console.log("JSON", error);
    }
  }
}

export default usePopularMovies