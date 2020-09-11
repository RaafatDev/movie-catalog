import React from "react";
import { Link } from "react-router-dom";
import { PopularMovie } from "../../model/PopularMovie";

interface Props {
  movie: PopularMovie;
}

const Suggestion: React.FC<Props> = ({ movie }) => {
  //
  const kind: string = movie.isMovie ? "film" : "tv-show";
  // console.log("the movie infors: ", movie);

  return (
    <div>
      <div className="suggestions__item d-flex border bg-white">
        <img src={movie.poster_path} className="suggestions__item__image" />

        <div className="suggestions__item__info pl-2">
          <Link
            to={{
              // pathname: `/movie/${movie.id}/${movie.title
              // /details/${kind}
              pathname: `/details/${kind}/${movie.id}/${movie.title
                .split(" ")
                .join("-")}`,
              // pathname: `/details/${kind}/${id}/${title.split(" ").join("-")}`,
              state: {
                movie: JSON.stringify(movie),
              },
            }}
          >
            <p className="suggestions__item__info__title m-0  font-weight-bold">
              {movie.title}
            </p>
          </Link>
          <p className="suggestions__item__info__year m-0 text-muted">
            Release: {movie.release_date}
          </p>
          <p className="suggestions__item__info__genres m-0 text-muted">
            {movie.Genres}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
