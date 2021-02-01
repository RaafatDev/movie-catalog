import React from "react";
import { ICombined } from "../../model/combined";
import { getImagePath } from "../../util/helperFunctions";
// import styled from "styled-components";

// const $Container = styled.div`
//     /* background-color: green; */
//     /* border: 1px solid blue; */
// `;

// const StyledContainer = styled.div`
//     color: white;
//     width: 80%;
//     margin: auto;
// `

interface Props {
    combinedFetch: ICombined;
}

const BasicDetails: React.FC<Props> = ({
    combinedFetch: {
        poster_path,
        backdrop_path,
        title,
        release_date,
        overview,
        budget,
        Genre,
        Director,
        Writer,
        number_of_episodes,
        number_of_seasons,
        // Actors,
        Country,
        Awards,
        Ratings,
        imdbRating,
        Production,
        Runtime,

        //
    },
}) => {
    let budgetFormat = budget ? new Intl.NumberFormat().format(budget) : undefined;

    let RottenTomato: string = "N/A";

    if (Ratings && Ratings.length > 0) {
        RottenTomato = Ratings.filter((Rat) => Rat.Source === "Rotten Tomatoes")[0]?.Value ?? "N/A";
        // Ratings.map((Rat) => {
        //     if (Rat.Source === "Rotten Tomatoes") {
        //         RottenTomato = Rat.Value;
        //     }
        // });
    }

    const imgSrc = getImagePath(poster_path, backdrop_path);

    const basicDetail: Record<string, any> = {
        "Release Date": release_date,
        Genre,
        Runtime,
        "Number Of Episodes": number_of_episodes,
        "Number Of Seasons": number_of_seasons,
        Budget: budgetFormat,
        Director,
        Writer,
        Country,
        Awards,
        Production,
        IMDB: imdbRating,
        "Rotten Tomatoes": RottenTomato,
        Overview: overview,
        //
    };

    // console.log("Rottent Tomato: ", RottenTomato);

    return (
        <div className="basic-info-container">
            <div className="container-fluid basic-info">
                <div className="row">
                    <div className="col-12 col-md-5 pt-4 text-center">
                        <img className="basic-info__image" src={imgSrc} alt={title} />
                    </div>
                    <div className="col mt-3 mt-md-0 pt-4">
                        {Object.keys(basicDetail).map((detail, index) => {
                            if (!basicDetail[detail] || basicDetail[detail] === "N/A") return null;
                            return (
                                <span key={index}>
                                    <strong>{detail}:</strong> {basicDetail[detail]}
                                    <br />
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicDetails;
