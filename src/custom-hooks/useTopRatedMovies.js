import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constants"
import { addTopRatedMovies } from "../store/movieSlice"

const useTopRatedMovies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getTopRatedMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTION)
      const json = await data.json()
      dispatch(addTopRatedMovies(json.results))
    } catch (error) {
      console.log("JSON", error);
    }
  }
}

export default useTopRatedMovies