import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constants"
import { addNowPlayingMovies } from "../store/movieSlice"

const useNowPlayingMoview = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getNowPlayingMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTION)
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
    } catch (error) {
      console.log("JSON", error);
    }
  }
}

export default useNowPlayingMoview