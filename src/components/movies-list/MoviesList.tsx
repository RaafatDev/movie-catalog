import React from "react";
import { useQuery, gql } from "@apollo/client";

import { PopularMovie } from "../../model/PopularMovie";

import Movie from "./Movie";

type FragmentType = {
  fragments?: {
    basicDetail?: any;
  };
};

let MovieListPage: FragmentType = {};

MovieListPage.fragments = {
  basicDetail: gql`
    fragment testFragment on MovieList {
      isMovie
      title
      release_date
      id
      poster_path
      backdrop_path
      overview
      genre_ids
    }
  `,
};

const FETCH_TV_SHOW_LIST = gql`
  query FetchTVShowList {
    TVShowList {
      ...testFragment
    }
  }
  ${MovieListPage.fragments.basicDetail}
`;

const FETCH_MOVIES_LIST = gql`
  query FetchMovieList {
    movieList {
      ...testFragment
    }
  }
  ${MovieListPage.fragments.basicDetail}
`;

const MoviesList: React.FC = () => {
  const {
    loading: movieListLoading,
    error: movieListError,
    data: movieListData,
  } = useQuery(FETCH_MOVIES_LIST);

  const {
    loading: TVShowListLoading,
    error: TVShowListError,
    data: TVShowListData,
  } = useQuery(FETCH_TV_SHOW_LIST);

  if (movieListLoading || TVShowListLoading) return <div>Loading ... </div>;
  if (movieListError || TVShowListError)
    return <div>Something went wrong {":("}</div>;

  return (
    <div className="movies-list-container container text-light  mt-4">
      <h1>Movies</h1>
      <div className="container">
        <div className="row">
          {movieListData &&
            movieListData.movieList.slice(0, 10).map((movie: PopularMovie) => (
              <div
                className="col m-2 p-0 d-flex justify-content-center align-items-stretch"
                key={movie.id}
              >
                <Movie oneMovie={movie} key={movie.id} />
              </div>
            ))}
        </div>
      </div>
      <hr />
      <h1>TV Shows</h1>
      <div className="container">
        <div className="row">
          {TVShowListData &&
            TVShowListData.TVShowList.slice(0, 10).map(
              (TVShow: PopularMovie) => (
                <div
                  className="col m-2 p-0 d-flex justify-content-center align-items-stretch"
                  key={TVShow.id}
                >
                  <Movie oneMovie={TVShow} key={TVShow.id} />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
