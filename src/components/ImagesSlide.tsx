import React, { useRef, MouseEvent, useState, useEffect } from "react";
import Slider from "react-slick";
// import "./ImagesSlide.scss";
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
  // const closeOverlay = () => {
  //   setShowOverlay(false);
  // };
  const overlayClickHandler = (e: MouseEvent) => {
    // if (e.target)
    // console.log("");
    // console.log("the target clicked is :", e.target);
    if (e.target === overlayRef.current) {
      // console.log("Image clicked !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
      setShowOverlay(false);
      // console.log("overlay is : ::::", overlayRef.current);
    }
    // else {
    //   console.log("overlay clicked !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
    // }
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
    // slidesToShow: 3,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplay: false,
    // speed: 2000,
    autoplaySpeed: 2000,
    // autoplaySpeed: 1500
    // cssEase: "linear"
    pauseOnHover: false,

    // pauseOnHover: true
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
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
          {/* <div className="overlay" onClick={closeOverlay} ref={overlayRef}> */}
          <div
            className="overlay"
            onClick={overlayClickHandler}
            ref={overlayRef}
          >
            <button
              // onClick={closeOverlay}
              onClick={() => setShowOverlay(false)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div
              className="overlay__image-container"
              style={{ height: "auto" }}
            >
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
