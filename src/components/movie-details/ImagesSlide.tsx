import React, { useRef, MouseEvent, useState, useEffect } from "react";
import Slider from "react-slick";
// import { basePosterUrl } from "../urls_and_keys";
import MovieImages from "./MovieImages";
interface Props {
  images: {
    backdrops: { file_path: string }[];
    posters: { file_path: string }[];
  };
}

const ImagesSlide: React.FC<Props> = ({ images: { backdrops } }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<any>();

  const openOverlay = (event: MouseEvent<HTMLImageElement>) => {
    setImageSrc(event.currentTarget.src);
    setShowOverlay(true);
  };

  const overlayClickHandler = (e: MouseEvent) => {
    if (e.target === overlayRef.current) {
      setShowOverlay(false);
    }
  };

  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 1,

    // className: "center",
    // centerMode: true,

    // slidesToShow: 1,
    slidesToShow: 3,
    // centerPadding: "60px",
    // lazyLoad: true,
    slidesToScroll: 3,
    // autoplay: true,
    autoplay: false,
    // speed: 2000,
    autoplaySpeed: 2000,
    // autoplaySpeed: 1500
    // cssEase: "linear"
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          className: "center",
          centerMode: true,
          dots: false,
          arrows: false,
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          className: "center",
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      }
      // {
      //   breakpoint: 992,
      //   settings: "unslick"
      // }
    ]
  };
  return (
    <div className="ImagesSlide mb-4">
      <Slider {...settings}>
        {backdrops.map((image: any, index: number) => (
          <MovieImages
            image={image}
            key={index}
            openOverlay={openOverlay}
            length={backdrops.length}
          />
        ))}
      </Slider>
      {showOverlay ? (
        <>
          <div
            className="overlay"
            onClick={overlayClickHandler}
            ref={overlayRef}
          >
            <button
              onClick={() => setShowOverlay(false)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="overlay__image-container">
              <img src={imageSrc} />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImagesSlide;
