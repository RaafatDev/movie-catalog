import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router";
// import MoviesList from "./movies-list/MoviesList";
import Movie from "./movies-list/Movie";
import { PopularMovie } from "../model/PopularMovie";

interface Props extends RouteComponentProps {}

const SearchResults: React.FC<Props> = () => {
  const history = useHistory<any>();

  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    const movieArrParsed = JSON.parse(history.location.state.searchedMovies);
    if (movieArrParsed) {
      setMovieArr(movieArrParsed);
    }
  }, [history.location.state.searchedMovies]);

  return (
    <div>
      <div className="container text-light mt-5">
        <h1>Result for: {history.location.state.keyword} </h1>
        <div className="container">
          <div className="row">
            {movieArr &&
              movieArr.map((x: PopularMovie) => (
                <div
                  className="col  m-2 p-0 d-flex align-items-stretch"
                  key={x.id}
                >
                  <Movie oneMovie={x} key={x.id} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
