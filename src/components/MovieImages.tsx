import React, { MouseEvent } from "react";
import { basePosterUrl } from "../urls_and_keys";

interface Props {
  image: {
    file_path: string;
  };
  length: number;
  //   openOverlay: (event: MouseEvent<HTMLButtonElement>) => void;
  openOverlay: (event: MouseEvent<HTMLImageElement>) => void;
}

const MovieImages: React.FC<Props> = ({ image, length, openOverlay }) => {
  // const testFunction = (e: any) => {
  //   let currentIndex = e.target.dataset.id - 1;

  //   const src = e.target.src;

  //   const overlayImage = document.querySelector(".overlay-image");
  //   const overlay = document.querySelector(".overlay");
  //   const overlayClose = overlay?.querySelector(".close-image");
  //   // document.querySelector(".go-next").addEventListener("click", goNext);
  //   // document.querySelector(".go-prev").addEventListener("click", goPrev);

  //   // overlay.classList.add("open");
  //   // overlayImage.src = src;

  //   const gallery = document.querySelector(".gallery");
  //   const images = gallery.querySelectorAll("[data-id]");
  //   const srcArr = [];
  //   images.forEach(img => {
  //     srcArr.push(img.src);
  //   });

  //   overlayClose.addEventListener("click", () => {
  //     overlay.classList.remove("open");
  //   });
  //   // ##########
  //   window.addEventListener("keydown", keyHandler);

  //   function goNext() {
  //     currentIndex = currentIndex === srcArr.length - 1 ? 0 : currentIndex + 1;
  //     overlayImage.src = srcArr[currentIndex];
  //   }
  //   function goPrev() {
  //     currentIndex = currentIndex === 0 ? srcArr.length - 1 : currentIndex - 1;
  //     overlayImage.src = srcArr[currentIndex];
  //   }
  //   // function keyHandler(e) {
  //   //   if (e.key === "Escape") {
  //   //     overlay.classList.remove("open");
  //   //   }
  //   //   if (e.key === "ArrowRight") {
  //   //     goNext();
  //   //   }
  //   //   if (e.key === "ArrowLeft") {
  //   //     goPrev();
  //   //   }
  //   // }
  // };

  const openModal = (e: MouseEvent<HTMLImageElement>) => {
    // console.log("modal opend ");
    // console.log({ length });

    // openOverlay(event: MouseEvent);
    openOverlay(e);
    // const imageSrc = `${basePosterUrl}w1280${image.file_path}`;
    // console.log({ imageSrc });
  };
  return (
    // <div onClick={() => openModal(e: Event)}>
    <div>
      <img
        // onFocus={() => {
        //   console.log("Received focus image ");
        // }}
        // onBlur={() => {
        //   console.log("Lost focus image");
        // }}
        onClick={openModal}
        src={`${basePosterUrl}w1280${image.file_path}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default MovieImages;
