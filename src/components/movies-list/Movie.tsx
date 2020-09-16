import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  overflow: hidden;
  padding: 0 0 2px;
  margin: 0px auto 0;
  width: 200px;
  /* font-family: Quicksand, arial, sans-serif; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  img {
    min-width: 200px;
    width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  position: relative;
  .movie-info {
    text-align: center;
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 1s ease-in;
  }

  &:hover .movie-info {
    display: block;
    color: #ddd;
  }
`;

const StyledTitle = styled.h5`
  /* color: #fff; */
  margin-top: 6px;
  color: #ccc;
  font-weight: 300;
`;

const StyledDate = styled.div`
  color: #ccc;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 6px 0;
`;

interface MovieProps {
  oneMovie: PopularMovie;
}

const Movie: React.FC<MovieProps> = ({ oneMovie }) => {
  // console.log("one Movie: ", oneMovie);

  const { isMovie, id, poster_path, title, release_date } = oneMovie;
  const kind: string = isMovie ? "film" : "tv-show";

  return (
    <Link
      to={{
        pathname: `/details/${kind}/${id}/${title.split(" ").join("-")}`,
        state: {
          movie: JSON.stringify(oneMovie),
        },
      }}
    >
      <StyledCard>
        <img src={poster_path} alt={title + id} />
        <div className="movie-info">
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>({release_date}) </StyledDate>
        </div>
      </StyledCard>
      {/* <div className="movie-container text-center">
        <img
          className="movie-container__image rounded-lg"
          src={poster_path}
          alt={title + id}
        />
        <div className="movie-container__info p-2">
          <p className="lead mb-0">{title}</p>
          <p className="lead">({release_date}) </p>
        </div>
      </div> */}
    </Link>
  );
};

export default Movie;

/*
background or the whole page is the same like the background of the cart: #17141d

border-radius: 16px; 
background: #17141d;
box-shadow: 0 0 3rem #00

*/
