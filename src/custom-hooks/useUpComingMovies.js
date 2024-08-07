import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constants"
import { addUpComingMovies } from "../store/movieSlice"

const useUpComingMovies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getUpComingMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUpComingMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTION)
      const json = await data.json()
      dispatch(addUpComingMovies(json.results))
    } catch (error) {
      console.log("JSON", error);
    }
  }
}

export default useUpComingMovies