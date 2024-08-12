import { useSelector } from "react-redux";
import useNowPlayingMoview from "../custom-hooks/useNowPlayingMovies";
import usePopularMovies from "../custom-hooks/userPopularMovies";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies";
import useUpComingMovies from "../custom-hooks/useUpComingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  const showGPTSearch = useSelector(store => store?.gpt?.showGPTSearch)

  useNowPlayingMoview();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {
        showGPTSearch ? (<GPTSearch />) :
          (<>
            <MainContainer />
            <SecondaryContainer />
          </>)
      }
    </div>
  )
}

export default Browse;