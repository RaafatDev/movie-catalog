import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { Link } from "react-router-dom";

interface MovieProps {
  oneMovie: PopularMovie;
}

const Movie: React.FC<MovieProps> = ({ oneMovie }) => {
  const { id, poster_path, title, release_date } = oneMovie;

  return (
    <Link
      to={{
        pathname: `/movie/${id}/${title.split(" ").join("-")}`,
        state: {
          movie: JSON.stringify(oneMovie)
        }
      }}
    >
      <div className="movie-container text-center">
        <img
          className="movie-container__image rounded-lg"
          src={poster_path}
          alt={title + id}
        />
        <div className="movie-container__info p-2">
          <p className="lead mb-0">{title}</p>
          <p className="lead">({release_date}) </p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
