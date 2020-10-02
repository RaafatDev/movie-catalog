import React from "react";

import { PopularMovie } from "../../model/PopularMovie";

import Movie from "./Movie";
interface MovieListProps {
  movieList: PopularMovie[];
  listType: string;
}

const MoviesList: React.FC<MovieListProps> = ({ movieList, listType }) => {
  return (
    <div className="movies-list-container container text-light  mt-4">
      <h1>{listType}</h1>
      <div className="container">
        <div className="row">
          {movieList &&
            movieList.slice(0, 10).map((movie: PopularMovie) => (
              <div
                className="col p-0 d-flex justify-content-center align-items-stretch"
                key={movie.id}
              >
                <Movie oneMovie={movie} key={movie.id} />
              </div>
            ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MoviesList;
