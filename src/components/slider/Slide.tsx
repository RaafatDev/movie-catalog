import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { Link } from "react-router-dom";

interface MovieProps {
  oneMovie: PopularMovie;
}
const Slid: React.FC<MovieProps> = ({ oneMovie }) => {
  const { title, backdrop_path, id, overview, release_date, Genres } = oneMovie;
  return (
    <div className="slide-container">
      <img src={backdrop_path} alt={title} />
      <div className="container">
        <div className="slide slide--has-caption slick-slide">
          <div className="slide__caption">
            <Link
              to={{
                pathname: `/movie/${id}/${title.split(" ").join("-")}`,
                state: {
                  movie: JSON.stringify(oneMovie)
                }
              }}
            >
              <h1 className="slide__caption__title">{title}</h1>
            </Link>
            <ul className="list-inline">
              <li className="slide__caption__release-date list-inline-item">
                Release date: {release_date}
              </li>
              <li className="list-inline-item text-white">Genres: {Genres}</li>
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
