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
  let budgetFormat = budget
    ? new Intl.NumberFormat().format(budget)
    : undefined;
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

  console.log("budgggggggggggggggget");

  console.log({ budget });

  return (
    <div className="basic-info-container">
      <div className="container-fluid basic-info">
        <div className="row">
          <div className="col-12 col-md-5 pt-4 text-center">
            <img className="basic-info__image" src={poster_path} alt={title} />
          </div>
          <div className="col mt-3 mt-md-0 pt-4">
            {release_date && (
              <>
                <span>Release Date:</span> {release_date}
                <br />
              </>
            )}

            {Genre && Genre !== "N/A" && (
              <>
                {" "}
                <span>Genres:</span> {Genre}
                <br />
              </>
            )}

            {budgetFormat && (
              <>
                <span>Budget:</span> {budgetFormat} <br />
              </>
            )}
            {Director && Director !== "N/A" && (
              <>
                <span>Director:</span> {Director} <br />
              </>
            )}
            {Writer && Writer !== "N/A" && (
              <>
                <span>Writer:</span> {Writer} <br />
              </>
            )}
            {Country && Country !== "N/A" && (
              <>
                <span>Country:</span> {Country} <br />
              </>
            )}
            {Awards && Awards !== "N/A" && (
              <>
                <span>Awards:</span> {Awards} <br />
              </>
            )}
            {Production && Production !== "N/A" && (
              <>
                <span>Production:</span> {Production} <br />
              </>
            )}
            {imdbRating && imdbRating !== "N/A" && (
              <>
                <span>IMDB: </span>
                {imdbRating} <br />
              </>
            )}
            {RottenTomato !== "" && RottenTomato !== "N/A" && (
              <p>
                <span>Rotten Tomatoes:</span> {RottenTomato}{" "}
              </p>
            )}
            {overview && (
              <p>
                <span>Overview:</span> {overview}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
