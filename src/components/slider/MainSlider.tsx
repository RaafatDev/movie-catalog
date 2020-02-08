import React, { useContext } from "react";
import Slider from "react-slick";
import { MoviesContext } from "../../App";
import Slid from "./Slid";
import { PopularMovie } from "../../model/PopularMovie";

// class MainSlider extends React.Component {
const MainSlider: React.FC = () => {
  // const { state, dispatch } = useContext<any>(MoviesContext);
  const { state } = useContext<any>(MoviesContext);

  var settings = {
    // dotsClass: "{top: -45px}",
    // dotsClass: "inside-dots, inside-dots > li",
    // customPaging: function(i: any) {
    //   return (
    //     <div className="test1">
    //       <a>
    //         {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
    //         <div>Hii</div>
    //       </a>
    //     </div>
    //   );
    // },
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    // speed: 500,
    initialSlide: 1,
    // slidesToShow: 3,
    // slidesToScroll: 3
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
    <Slider {...settings}>
      {/* {state && <h1>{state.error} </h1>} */}
      {/* {contextTest.state.error && <h1>something went wrong</h1>} */}
      {state.movieArr &&
        state.movieArr[0] &&
        state.movieArr[0].poster_path &&
        state.movieArr.map((x: PopularMovie) => (
          <Slid oneMovie={x} key={x.id} />
        ))}
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
};

export default MainSlider;
