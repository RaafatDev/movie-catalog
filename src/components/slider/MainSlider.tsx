import React, { useContext } from "react";
import Slider from "react-slick";
// import { MoviesContext } from "../../App";
import Slid from "./Slide";
import { PopularMovie } from "../../model/PopularMovie";

interface MainSliderProps {
  movieList: PopularMovie[];
}
const MainSlider: React.FC<MainSliderProps> = ({ movieList }) => {
  // const { state } = useContext<any>(MoviesContext);

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div className="main-slider container">
      <Slider {...settings}>
        {movieList &&
          movieList[0] &&
          // state.movieArr[0].poster_path &&
          movieList[0].backdrop_path &&
          movieList.map(
            (movie: PopularMovie) =>
              movie.backdrop_path !==
                process.env.PUBLIC_URL + "/img/no_image.png" && (
                <Slid oneMovie={movie} key={movie.id} />
              )
          )}
      </Slider>
    </div>
  );
};

export default MainSlider;
