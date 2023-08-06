import { useState, useEffect } from "react";
import movieApi from "../../api/MovieAPI";
import { APIKey } from "../../api/MovieAPIKey";
import { useDispatch } from "react-redux"; // ใช้เพื่อ update ค่าให้กับ redux store
import { addMovie } from "../../store/Reducer";
import MovieListing from "../MovieListing/MovieListing";
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("Thor");

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await movieApi.get(
        `?apiKey=${APIKey}&s=${search}&type=movie`
      );

      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };

    fetchMovies();
  }, [search]);

  return (
    <div>
      <div className="container">
        <h3 style={{ margin: "1rem 0" }}>Movies</h3>
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
