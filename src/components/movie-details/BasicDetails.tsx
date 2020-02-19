import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { ICombined } from "../../model/combined";

interface Props {
  combinedFetch: ICombined;
  movie: PopularMovie;
}

const BasicDetails: React.FC<Props> = ({
  movie: { poster_path, title, release_date, overview },
  combinedFetch: {
    budget,
    Genre,
    Director,
    Writer,
    // Actors,
    Country,
    Awards,
    Ratings,
    imdbRating,
    Production
  }
}) => {
  let RottenTomato: string = "";

  // console.log({ Ratings });
  // console.log({ imdbRating });
  if (Ratings && Ratings.length > 0) {
    Ratings.map(Rat => {
      if (Rat.Source === "Rotten Tomatoes") {
        // console.log("gooooot it ");

        RottenTomato = Rat.Value;
        // console.log(Rat.Source);
      }
    });
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5 text-center">
            <img className="basic-info__image" src={poster_path} alt={title} />
          </div>
          <div className="col mt-3 mt-md-0 pt-4">
            {release_date && <p>Release Date: {release_date} </p>}

            {Genre && Genre !== "N/A" && <p>Genres: {Genre}</p>}

            {budget && budget !== 0 && (
              <p>Budget: {new Intl.NumberFormat().format(budget)} </p>
            )}
            {Director && Director !== "N/A" && <p>Director: {Director} </p>}
            {Writer && Writer !== "N/A" && <p>Writer: {Writer} </p>}
            {Country && Country !== "N/A" && <p>Country: {Country} </p>}
            {Awards && Awards !== "N/A" && <p>Awards: {Awards} </p>}
            {Production && Production !== "N/A" && (
              <p>Production: {Production} </p>
            )}
            {imdbRating && imdbRating !== "N/A" && <p>IMDB: {imdbRating} </p>}
            {RottenTomato !== "" && RottenTomato !== "N/A" && (
              <p>Rotten Tomatoes: {RottenTomato} </p>
            )}
            {overview && <p>Overview: {overview} </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
