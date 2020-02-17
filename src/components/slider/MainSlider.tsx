import React, { useContext } from "react";
import Slider from "react-slick";
import { MoviesContext } from "../../App";
import Slid from "./Slid";
import { PopularMovie } from "../../model/PopularMovie";

// class MainSlider extends React.Component {
const MainSlider: React.FC = () => {
  // const { state, dispatch } = useContext<any>(MoviesContext);
  const { state } = useContext<any>(MoviesContext);
  // const mainSliderRef = React.useRef<any>(null);
  //! $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

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
    // customPaging: function() {
    //   // return <a>{state.movieArr}</a>;
    //   return <div>{state.movieArr[0].title}</div>;
    // },
    // // dots: false,
    infinite: true,
    // speed: 500,
    initialSlide: 1,
    // slidesToShow: 3,
    // slidesToScroll: 3
    // autoplay: true,
    autoplay: false,
    arrows: false,
    // speed: 2000,
    autoplaySpeed: 2000,
    // autoplaySpeed: 1500
    // cssEase: "linear"
    pauseOnHover: false
    // pauseOnHover: true

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <div className="main-slider container">
      {/* <div className="main-slider" ref={mainSliderRef}> */}
      {/* <Slider {...settings} ref={mainSliderRef}> */}
      <Slider {...settings}>
        {/* {state && <h1>{state.error} </h1>} */}
        {/* {contextTest.state.error && <h1>something went wrong</h1>} */}
        {state.movieArr &&
          state.movieArr[0] &&
          state.movieArr[0].poster_path &&
          state.movieArr.map((x: PopularMovie) => (
            <Slid oneMovie={x} key={x.id} />
          ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
