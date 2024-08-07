import useNowPlayingMoview from "../custom-hooks/useNowPlayingMovies";
import usePopularMovies from "../custom-hooks/userPopularMovies";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies";
import useUpComingMovies from "../custom-hooks/useUpComingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMoview();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;