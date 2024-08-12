import { NETFLIX_BG_URL } from "../utils/constants"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG_URL}
          alt="Logo" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch