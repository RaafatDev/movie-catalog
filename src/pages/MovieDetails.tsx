// import React, { useState, useEffect } from "react";
import React from "react";
// import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import { RouteComponentProps, useHistory } from "react-router-dom";
// import { PopularMovie } from "../model/PopularMovie";
import { useFetch } from "../hooks/useFetch";
import { useFetchTMDB } from "../hooks/useSortCombined";
import { useURL } from "../hooks/useURL";

interface Props extends RouteComponentProps<{ id: string }> {}

const MovieDetails: React.FC<Props> = props => {
  const id = props.match.params.id;
  const history = useHistory<any>();

  const {
    isMovie,
    title,
    release_date,
    id: movieId,
    poster_path,
    backdrop_path,
    overview,
    Genres
  } = JSON.parse(history.location.state.movie);

  const { url } = useURL(isMovie, movieId);
  const [tmdb_movie_info, isLoading, error] = useFetch(url);
  const [tmdb_movie_infooooo] = useFetchTMDB(url);
  // const [tmdb_movie_infooooo] = usefetchTMDB(url);

  // console.log(tmdb_movie_info);

  return (
    <div className="m-5 p-5 border">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="" width="400px" src={poster_path} alt={title} />
            {/* <img className="" width="400px" src={backdrop_path} alt={title} /> */}
          </div>
          <div className="col">
            <p>Title: {title} </p>
            <p>Release Date: {release_date} </p>
            <p>Genres: {Genres}</p>
            <p>id: {id}</p>
            <p>Overview: {overview} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
