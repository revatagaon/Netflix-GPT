import { useSelector } from "react-redux"
import useMovieTrailer from "../custom-hooks/useMovieTrailer"

/* eslint-disable react/prop-types */
const VideoBackGround = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  useMovieTrailer(movieId)

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/Idh8n5XuYIA?si=${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div >
  )
}

export default VideoBackGround