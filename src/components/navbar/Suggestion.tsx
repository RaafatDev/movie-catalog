import React from "react";
import { Link } from "react-router-dom";
import { PopularMovie } from "../../model/PopularMovie";

interface Props {
  movie: PopularMovie;
}

const Suggestion: React.FC<Props> = ({ movie }) => {
  //
  const kind: string = movie.isMovie ? "film" : "tv-show";

  // console.log("movieeeeeeeeeeeeeeeee: ", movie);

  // console.log("the movie in the suggestions: ", movie);

  let imgSrc: string;

  if (movie.poster_path !== "no_image") {
    imgSrc = movie.poster_path;
  } else if (
    movie.poster_path === "no_image" &&
    movie.backdrop_path !== "no_image"
  ) {
    imgSrc = movie.backdrop_path;
  } else {
    imgSrc = `${process.env.PUBLIC_URL}/img/no_image.png`;
  }

  return (
    <div>
      <div className="suggestions__item d-flex border bg-white">
        {/* <img src={movie.poster_path} className="suggestions__item__image" /> */}
        <img src={imgSrc} className="suggestions__item__image" />

        <div className="suggestions__item__info pl-2">
          <Link
            to={{
              pathname: `/details/${kind}/${movie.id}/${movie.title
                .split(" ")
                .join("-")}`,
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
