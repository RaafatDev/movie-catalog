import React, { MouseEvent } from "react";

interface Props {
  image: {
    file_path: string;
  };
  length: number;
  //   openOverlay: (event: MouseEvent<HTMLButtonElement>) => void;
  openOverlay: (event: MouseEvent<HTMLImageElement>) => void;
}

const MovieImages: React.FC<Props> = ({ image, length, openOverlay }) => {
  //
  const basePosterUrl = `https://image.tmdb.org/t/p/`;

  const openModal = (e: MouseEvent<HTMLImageElement>) => {
    openOverlay(e);
  };
  return (
    <div>
      <img
        onClick={openModal}
        src={`${basePosterUrl}w1280${image.file_path}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default MovieImages;
