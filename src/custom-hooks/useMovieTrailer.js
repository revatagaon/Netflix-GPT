import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constants"
import { addTrailerVideo } from "../store/movieSlice"

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    // Fetching Trailer video and updating the store with trailer video data
    getMovieVidoes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getMovieVidoes = async () => {
    try {
      const data = fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTION)
      const json = await (await data).json()
      const filterData = json.results.filter(video => video.type === "Trailer")
      const trailer = filterData.length ? filterData[0] : json.results[0]
      dispatch(addTrailerVideo(trailer))
    } catch (error) {
      console.log("JSON", error);
    }
  }
}

export default useMovieTrailer