import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { Link } from "react-router-dom";

interface MovieProps {
  oneMovie: PopularMovie;
}
const Slid: React.FC<MovieProps> = ({ oneMovie }) => {
  // const { id, overview, poster_path, title, release_date } = oneMovie;
  const {
    poster_path,
    title,
    backdrop_path,
    id,
    overview,
    release_date,
    Genres
  } = oneMovie;
  return (
    <div>
      {/* <h1>Hiiiii</h1> */}
      {/* <h1>single Movie</h1> */}
      {/* <h2>{oneMovie.title}</h2> */}
      {/* <img width="200px" src={poster_path} /> */}
      <img
        // style={{ width: "100%", height: "90vh", cursor: "grab" }}
        style={{ width: "100%", cursor: "grab" }}
        // src={poster_path}
        src={backdrop_path}
        alt={title}
      />
      {/* <img .../> */}
      <div className="container">
        <div className="slide slide--has-caption slick-slide">
          {/* <div className="container"> */}
          <div className="slide__caption border">
            <Link
              to={{
                pathname: `/movie/${id}/${title.split(" ").join("-")}`,
                state: {
                  // from: "root",
                  // name: `${title}`,
                  movie: JSON.stringify(oneMovie)
                  // detail: oneMovie
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
          {/* </div> */}
        </div>
      </div>
      {/* </Link> */}
      {/* <img style={{ width: "100%", height: "90vh" }} src={oneMovie.backdrop_path} /> */}
    </div>
  );
};

export default Slid;
