import React from "react";
import styled from "styled-components";
const basePosterUrl = "https://image.tmdb.org/t/p/";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  /* align-content: stretch;
   */
  /* padding: 5px; */
`;

const ImageWrapper = styled.div`
  /* min-width: auto; */
  /* width: 320px; */
  /* height: 240px; */

  /* give the items a portion of the container  */
  padding: 5px;
  flex-basis: 100%;

  @media only screen and (min-width: 640px) {
    flex-basis: 50%;
  }

  @media only screen and (min-width: 960px) {
    flex-basis: 33.333%;
  }
  @media only screen and (min-width: 1280px) {
    flex-basis: 25%;
  }
  /* max-width: 300px; */
  /* margin: 5px; */
`;

interface Props {
  images: {
    backdrops: { file_path: string }[];
    posters: { file_path: string }[];
  };
}

const ImageGallery = ({ images: { backdrops } }: Props) => {
  //   console.log({ backdrops });

  return (
    <StyledContainer>
      {backdrops.map((image: any, index) => (
        <ImageWrapper key={index}>
          <img
            // onClick={openModal}
            src={`${basePosterUrl}w1280${image.file_path}`}
            style={{ width: "100%" }}
          />
        </ImageWrapper>
      ))}
    </StyledContainer>
  );
};

export default ImageGallery;
