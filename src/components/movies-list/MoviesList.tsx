import React, { useContext, useEffect } from "react";
import {
  movieRequestSend,
  movieRequestSuccess,
  movieRequestFailure,
  tvShowRequestSuccess
} from "../../appState/movieActions";
import { MoviesContext } from "../../App";
import { PopularMovie } from "../../model/PopularMovie";

import Movie from "./Movie";

import { popular_tv_url, popular_url } from "../../urls_and_keys";

import usePrepareMoviesArr from "../../hooks/usePrepareMoviesArr";
import { useFetch } from "../../hooks/useFetch";

const MoviesList: React.FC = () => {
  //!
  const { state, dispatch } = useContext<any>(MoviesContext);
  const [dataArr, isLoading, error] = useFetch(popular_url);
  const [tvDataArr, tvIsLoading, tvError] = useFetch(popular_tv_url);
  // const [sortedTvShowsArr] = usePrepareMoviesArr(tvDataArr, dispatch);
  const [sortedTvShowsArr] = usePrepareMoviesArr(tvDataArr);
  // const [sortedMoviesArr] = usePrepareMoviesArr(dataArr, dispatch);
  const [sortedMoviesArr] = usePrepareMoviesArr(dataArr);

  useEffect(() => {
    if (isLoading) dispatch(movieRequestSend());
    if (sortedTvShowsArr) dispatch(tvShowRequestSuccess(sortedTvShowsArr));
    if (sortedMoviesArr) dispatch(movieRequestSuccess(sortedMoviesArr));
    if (error) dispatch(movieRequestFailure);
  }, [sortedMoviesArr, sortedTvShowsArr]);
  // console.log("the global state", state);

  return (
    // <div className="container bg-primary p-4 p-md-0 mt-4">
    // <div className="container bg-primary  mt-4">
    <div className="movies-list-container container text-light  mt-4">
      <h1>Movies</h1>
      <div className="container">
        <div className="row">
          {state &&
            state.movieArr &&
            state.movieArr.slice(0, 10).map((x: PopularMovie) => (
              <div
                className="col m-2 p-0 d-flex justify-content-center align-items-stretch"
                key={x.id}
              >
                <Movie oneMovie={x} key={x.id} />
              </div>
            ))}
        </div>
      </div>
      <hr />
      {/* <br /> */}
      <h1>TV Shows</h1>
      <div className="container">
        <div className="row">
          {state &&
            state.tvShowArr &&
            state.tvShowArr.slice(0, 10).map((x: PopularMovie) => (
              <div
                className="col m-2 p-0 d-flex justify-content-center align-items-stretch"
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
