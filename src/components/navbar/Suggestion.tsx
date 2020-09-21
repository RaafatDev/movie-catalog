import React from "react";
import { Link } from "react-router-dom";
import { PopularMovie } from "../../model/PopularMovie";

interface Props {
  movie: PopularMovie;
}

const Suggestion: React.FC<Props> = ({ movie }) => {
  //
  const {
    poster_path,
    backdrop_path,
    isMovie,
    id,
    title,
    release_date,
    Genres,
  } = movie;
  //
  const kind: string = isMovie ? "film" : "tv-show";

  const imgSrc = poster_path !== "no_image" ? poster_path : backdrop_path;

  return (
    <div>
      <div className="suggestions__item d-flex border bg-white">
        <img
          src={
            imgSrc !== "no_image"
              ? imgSrc
              : `${process.env.PUBLIC_URL}/img/no_image.png`
          }
          className="suggestions__item__image"
        />

        <div className="suggestions__item__info pl-2">
          <Link
            to={{
              pathname: `/details/${kind}/${id}/${title.split(" ").join("-")}`,
              state: {
                movie: JSON.stringify(movie),
              },
            }}
          >
            <p className="suggestions__item__info__title m-0  font-weight-bold">
              {title}
            </p>
          </Link>
          <p className="suggestions__item__info__year m-0 text-muted">
            Release: {release_date}
          </p>
          <p className="suggestions__item__info__genres m-0 text-muted">
            {Genres}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
