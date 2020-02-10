import React, { useContext, useEffect } from "react";
import {
  movieRequestSend,
  movieRequestSuccess,
  movieRequestFailure
} from "../appState/movieActions";
import { MoviesContext } from "../App";
import { PopularMovie } from "../model/PopularMovie";

import Movie from "./Movie";

// import { Container, Row, Col } from "react-bootstrap";
import { popular_tv_url, popular_url } from "../urls_and_keys";
// import useSortMovieInfo from "../hooks/useSortMovieInfo";
import usePrepareMoviesArr from "../hooks/usePrepareMoviesArr";
import { useFetch } from "../hooks/useFetch";

const MoviesList: React.FC = () => {
  // const contextTest = useContext<any>(MoviesContext);
  //!
  const { state, dispatch } = useContext<any>(MoviesContext);
  // const [dataArr, isLoading, error] = useFetch(popular_tv_url);
  const [dataArr, isLoading, error] = useFetch(popular_url);
  const [sortedMoviesArr] = usePrepareMoviesArr(dataArr, dispatch);
  useEffect(() => {
    if (isLoading) dispatch(movieRequestSend());
    if (sortedMoviesArr) dispatch(movieRequestSuccess(sortedMoviesArr));
    if (error) dispatch(movieRequestFailure);
  }, [sortedMoviesArr]);
  console.log({ state });

  return (
    <div className="container bg-primary p-4 p-md-0 mt-4">
      <div className="container">
        <div className="row">
          {state &&
            state.movieArr &&
            state.movieArr.map((x: PopularMovie) => (
              <div
                className="col border m-2 p-0 d-flex align-items-stretch"
                key={x.id}
              >
                <Movie oneMovie={x} key={x.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
