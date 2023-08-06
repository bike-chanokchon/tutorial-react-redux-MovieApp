import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { useSelector } from "react-redux";

const MovieListing = () => {
  const { movies } = useSelector((state) => state.movies);

  return (
    <div className="container">
      <div className="movie-container">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieListing;
