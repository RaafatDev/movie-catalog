import React from "react";
import { PopularMovie } from "../model/PopularMovie";
import { ICombined } from "../model/combined";

interface Props {
  combinedFetch: ICombined;
  movie: PopularMovie;
  //   basic: {
  //     title: string;
  //     poster_path: string;
  //     Genres: string;
  //     release_date: string;
  //     overview: string;
  //   };
}

const BasicDetails: React.FC<Props> = ({
  movie: { poster_path, title, release_date, overview, Genres },
  combinedFetch: { budget }
}) => {
  //   console.log({ props });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5 text-center">
            <img className="" src={poster_path} alt={title} />
          </div>
          <div className="col mt-3 mt-md-0">
            <p>Release Date: {release_date} </p>
            <p>Genres: {Genres}</p>
            <p>{budget} </p>
            <p>Overview: {overview} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
