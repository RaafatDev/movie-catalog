import React from "react";
import Slider from "react-slick";
import "./ImagesSlide.scss";
// import MovieImages from "./MovieImages";
import { basePosterUrl } from "../urls_and_keys";
interface Props {
  images: {
    backdrops: { file_path: string }[];
    posters: { file_path: string }[];
  };
}

const ImagesSlide: React.FC<Props> = ({ images: { backdrops } }) => {
  var settings = {
    // slidesToShow: 1,
    // slidesToScroll: 1,
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
          <img src={`${basePosterUrl}w1280${image.file_path}`} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default ImagesSlide;
