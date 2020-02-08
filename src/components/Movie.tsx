import React from "react";
import { PopularMovie } from "../model/PopularMovie";
import { Link } from "react-router-dom";

interface MovieProps {
  oneMovie: PopularMovie;
}

const Movie: React.FC<MovieProps> = ({ oneMovie }) => {
  // const { id, overview, poster_path, title, release_date } = oneMovie;
  const { id, poster_path, title, release_date } = oneMovie;

  return (
    // <div className="shadow text-center d-flex flex-column align-items-stretch">
    <div className="shadow text-center">
      <Link
        to={{
          pathname: `/${id}/${title.split(" ").join("-")}`,
          state: {
            movie: JSON.stringify(oneMovie)
          }
        }}
      >
        <img
          // className="w-lg-100"
          // width="250px"
          // width="250px"
          // className="img-responsive"
          // className="img-fluid"
          // style={{ minWidth: "250px", width: "100%" }}
          style={{ minWidth: "200px", width: "100%" }}
          // style={{
          //   height: "100%",
          //   display: "block",
          //   margin: "auto",
          //   maxWidth: "100%"
          // }}
          src={poster_path}
          alt={title + id}
        />
        {/* <img
          // className="rounded d-block mx-auto"
          width="250px"
          src={poster_path}
          alt={title + id}
        /> */}
      </Link>
      <div className="p-2">
        <p className="font-weight-bold lead mb-0">{title}</p>
        <p className="lead">({release_date}) </p>
      </div>
    </div>
  );
  // }
};

export default Movie;
