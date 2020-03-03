import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { Link } from "react-router-dom";

interface MovieProps {
  oneMovie: PopularMovie;
}
const Slid: React.FC<MovieProps> = ({ oneMovie }) => {
  const {
    isMovie,
    title,
    backdrop_path,
    id,
    overview,
    release_date,
    Genres
  } = oneMovie;
  const kind: string = isMovie ? "film" : "tv-show";
  return (
    <div className="slide-container">
      <img src={backdrop_path} alt={title} />
      <div className="container">
        <div className="slide slide--has-caption slick-slide">
          <div className="slide__caption">
            <Link
              to={{
                // pathname: `/movie/${id}/${title.split(" ").join("-")}`,
                pathname: `/details/${kind}/${id}/${title
                  .split(" ")
                  .join("-")}`,
                state: {
                  movie: JSON.stringify(oneMovie)
                }
              }}
            >
              <h1 className="slide__caption__title">{title}</h1>
            </Link>
            <ul className="list-inline">
              <li className="slide__caption__release-date list-inline-item">
                <span>Release date: </span>
                {release_date}
              </li>
              <li className="slide__caption__genres list-inline-item">
                <span>Genres: </span>
                {Genres}
              </li>
            </ul>
            <p className="slide__caption__overview d-none d-md-block">
              {overview}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slid;
