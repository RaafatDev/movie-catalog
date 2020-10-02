import React from "react";
import { PopularMovie } from "../../model/PopularMovie";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import {} from "styled-components/cssprop";

const StyledCardContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledCard = styled.div<{ no_image: string }>`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  margin: 0 auto 0;
  width: 200px;
  height: 100%;

  border-bottom: ${(props) =>
    props.no_image === "no_image" ? "1px solid black" : "none"};
  /* top-left */
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 0px 0 rgba(255, 255, 255, 0.3);

  border-radius: 5px;

  img {
    min-width: 200px;
    width: 100%;
  }

  .movie-info {
    padding: 0 5px;

    /* to make this part stick to the bottom */
    margin-top: auto;
  }
`;

const StyledTitle = styled.h5`
  padding: 5px 0;
  color: #e9ecef;
  font-size: 1.05em;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin: 0;
`;

// const StyledDate = styled.div``;

const StyledUl = styled.ul`
  list-style: none;
  justify-content: space-between;

  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.5;
  color: #565c67;

  display: flex;

  li {
    text-decoration: none;
  }

  .type {
    display: inline-block;
    font-style: normal;
    border: 1px solid #565c67;
    border-radius: 3px;
    padding: 0 5px;
    font-size: 0.8em;
  }
`;
interface MovieProps {
  oneMovie: PopularMovie;
}

const Movie: React.FC<MovieProps> = ({ oneMovie }) => {
  const {
    isMovie,
    id,
    poster_path,
    backdrop_path,
    title,
    release_date,
  } = oneMovie;
  const kind: string = isMovie ? "film" : "tv-show";

  const imgSrc = poster_path !== "no_image" ? poster_path : backdrop_path;

  return (
    <StyledCardContainer>
      <Link
        to={{
          pathname: `/details/${kind}/${id}/${title.split(" ").join("-")}`,
          state: {
            movie: JSON.stringify(oneMovie),
          },
        }}
      >
        <StyledCard no_image={imgSrc}>
          <img
            src={
              imgSrc !== "no_image"
                ? imgSrc
                : `${process.env.PUBLIC_URL}/img/no_image.png`
            }
            alt={title + id}
          />
          <div className="movie-info">
            <StyledTitle>{title}</StyledTitle>
            <StyledUl>
              <li>{release_date && release_date.split("-").join(".")}</li>
              <li className="type">{isMovie ? "Movie" : "TV"}</li>
            </StyledUl>
          </div>
        </StyledCard>
      </Link>
    </StyledCardContainer>
  );
};

export default Movie;
