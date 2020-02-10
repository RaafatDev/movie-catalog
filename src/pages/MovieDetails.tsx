// import React, { useState, useEffect } from "react";
import React from "react";
// import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import { RouteComponentProps, useHistory } from "react-router-dom";
// import { PopularMovie } from "../model/PopularMovie";
import { useFetch } from "../hooks/useFetch";
// import { useFetchTMDB } from "../hooks/useSortCombined";
import { useURL } from "../hooks/useURL";
// import usePrepareMovie from "../hooks/draft/usePrepareMovie";
import useCombineFetch from "../hooks/useCombineFetch";
import Credits from "../components/Credits";
// import usePrepareMoviesArr from "../hooks/usePrepareMoviesArr";

// interface ICombinedFetch {
//   credits: { cast: any[] };
// }

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
    // backdrop_path,
    overview,
    Genres
  } = JSON.parse(history.location.state.movie);

  // console.log({ isMovie });

  const { url } = useURL(isMovie, movieId);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");

  console.log({ url });

  // const [tmdb_movie_info, isLoading, error] = useFetch(url);
  const [combinedFetch] = useCombineFetch(url);
  // const [sortedMovie] = usePrepareMovie(combinedFetch);

  // setArrToSort(tmdb_movie_info);
  console.log("after Sorting $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
  console.log({ combinedFetch });

  // console.log({ sortedMovie });
  // console.log({ tmdb_movie_info });

  // if(!Object.keys(combinedFetch).length === 0 ){

  // }
  // todo
  // const [tmdb_movie_infooooo] = useFetchTMDB(url);

  // const [tmdb_movie_infooooo] = usefetchTMDB(url);

  console.log({ combinedFetch });

  return (
    <div className="m-5 p-5 border">
      {/* <p className="display-4  lead">Title: {title} </p> */}
      <div className="container">
        {/* <p className="h1">Title: {title} </p> */}
        <p className="h1">{title} </p>
      </div>
      {/* <BasicInfo /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <img className="" width="400px" src={poster_path} alt={title} /> */}
            <img className="" width="400px" src={poster_path} alt={title} />
            {/* <img className="" width="400px" src={backdrop_path} alt={title} /> */}
          </div>
          <div className="col">
            <p>Release Date: {release_date} </p>
            <p>Genres: {Genres}</p>
            <p>id: {id}</p>
            <p>Overview: {overview} </p>
          </div>
        </div>
      </div>
      {combinedFetch && combinedFetch.credits && (
        // {combinedFetch && combinedFetch.credits && combinedFetch.credits.cast && (
        <div className="container mt-4">
          <Credits
            cast={combinedFetch.credits.cast}
            actors={combinedFetch.Actors}
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
