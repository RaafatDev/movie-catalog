import React from "react";

interface Props {
  movie: any;
}

const Suggestion: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      <div
        className="suggestions__item d-flex border bg-white"
        key={movie.index}
      >
        <img
          src={movie.poster_path}
          className="suggestions__item__image"
          style={{ width: "32px", height: "50px" }}
        />

        <div className="suggestions__item__info pl-2">
          <a className="suggestions__item__info__name m-0">
            <p className="m-0  font-weight-bold">{movie.title}</p>
          </a>
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
