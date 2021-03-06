import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const StyledCard = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  /* font-family: Quicksand, arial, sans-serif; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

interface Props {}

const MovieGrid = (props: Props) => {
  return (
    <div>
      <p>Movie Grid!!</p>
      <Movie />
    </div>
  );
};

export default MovieGrid;
