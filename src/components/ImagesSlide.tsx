import React, { useRef, MouseEvent, useState, useEffect } from "react";
import Slider from "react-slick";
import "./ImagesSlide.scss";
// import MovieImages from "./MovieImages";
import { basePosterUrl } from "../urls_and_keys";
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
  // const overlayRef = useRef(null);
  const overlayRef = useRef<any>();

  const openOverlay = (event: MouseEvent<HTMLImageElement>) => {
    setImageSrc(event.currentTarget.src);
    setShowOverlay(true);

    console.log({ imageSrc });
  };
  const closeOverlay = () => {
    setShowOverlay(false);
  };
  // useEffect(() => {
  // setImageSrc(imageSrc2);
  // overlayRef.current.src = imageSrc;
  // overlayRef.current.display = "block";
  // }, [imageSrc]);
  var settings = {
    dots: true,
    infinite: true,
    initialSlide: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplay: false,
    // speed: 2000,
    autoplaySpeed: 2000,
    // autoplaySpeed: 1500
    // cssEase: "linear"
    pauseOnHover: false

    // pauseOnHover: true
  };
  return (
    <div className="ImagesSlide">
      <Slider {...settings}>
        {backdrops.map((image: any, index: number) => (
          <MovieImages
            image={image}
            key={index}
            openOverlay={openOverlay}
            length={backdrops.length}
          />
          // <img src={`${basePosterUrl}w1280${image.file_path}`} key={index} />
        ))}
      </Slider>
      {showOverlay ? (
        <>
          <div className="overlay" onClick={closeOverlay} ref={overlayRef}>
            <button
              onClick={closeOverlay}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="overlay__image-container">
              {/* <img src={basePosterUrl + "w1280" + backdrops[0].file_path} /> */}
              <img src={imageSrc} />
              {/* <img src={`${basePosterUrl}w1280${backdrops[0].file_path}}` /> */}
              {/* // <img src={backdrops[0].file_path} alt="" srcset=""/> */}
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
