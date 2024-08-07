/* eslint-disable react/prop-types */
import { IMAGE_CDN } from "../utils/constants"

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-2">
      <img
        alt="Movie Card"
        src={IMAGE_CDN + posterPath} />
    </div>
  )
}

export default MovieCard