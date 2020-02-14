import React, { useContext, useEffect, useLayoutEffect } from "react";
import Slider from "react-slick";
import { MoviesContext } from "../../App";
import Slid from "./Slid";
import { PopularMovie } from "../../model/PopularMovie";

// class MainSlider extends React.Component {
const MainSlider: React.FC = () => {
  // const { state, dispatch } = useContext<any>(MoviesContext);
  const { state } = useContext<any>(MoviesContext);
  // const mainSliderRef = React.useRef<any>(null);
  const mainSliderRef = React.useRef<any>(null);
  // React.useLayoutEffect(() => {
  // const ParentNode = mainSliderRef.current.innerSlider._reactInternalFiber.stateNode;
  // const ParentNode =
  //   mainSliderRef.current.innerSlider._reactInternalFiber.stateNode.lastChild;
  // const ParentNode =
  //   mainSliderRef.current.innerSlider._reactInternalFiber.stateNode.list;
  // const ParentNode =
  //   mainSliderRef.current.innerSlider._reactInternalFiber.stateNode
  //     .childNodes;
  // const child = ParentNode?.item;
  // console.log("tessssssssssssssssssss@@@@@@@@@@@@@@@@@@@@@@ ");
  // // console.log(mainSliderRef.current.innerSlider.list.offsetParent);
  // // console.log(mainSliderRef.current?.childNodes[0]);
  // console.log(mainSliderRef.current?.childNodes);
  // const Arr22: any = Array.from(mainSliderRef.current?.childNodes)[0];
  // console.log("Arr22 before", Arr22);
  // console.log("Arr22", Arr22.children);
  // console.log(mainSliderRef.current?.childNodes[0].children);
  // const Arr = mainSliderRef.current?.childNodes[0].children;
  // const Arr444 = mainSliderRef.current?.children;
  // console.log("Arr444", Arr444[0].children);
  // console.log(Arr[0].nextSibling);
  // console.log(Arr[0].nextElementSibling);
  // console.log({ child });
  // }, [mainSliderRef]);
  //! $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
  //! $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
  // useEffect(() => {
  //   let dotContainer = null;
  //   if (dotContainer === null) {
  //     dotContainer = document.createElement("div");
  //     dotContainer.classList.add("container");
  //   }
  //   let slickSlider = null;
  //   if (slickSlider === null) {
  //     slickSlider = document.querySelector(".slick-slider");
  //   }

  //   console.log({ slickSlider });

  //   if (dotContainer && slickSlider) {
  //     slickSlider?.appendChild(dotContainer);
  //   }

  //   // useLayoutEffect(() => {
  //   // document.querySelector("slick-slider")?.classList.add(".container");
  //   // const info = document.querySelector(".slide__caption__overview");
  //   let ul_element = null;
  //   if (ul_element === null) {
  //     ul_element = document.querySelector(".slick-dots");
  //   }

  //   // element?.classList.add("container");
  //   console.log({ ul_element });
  //   console.log({ info });
  //   // if (info) {
  //   if (ul_element !== null) {
  //     // info?.after(element);
  //     dotContainer?.appendChild(ul_element);
  //     // element.classList.add("container");
  //   }
  //   // element?.after(info);
  //   // }
  // }, [state]);

  // const info = document.querySelector(".slide__caption__overview");
  // console.log({ info });

  // const element = document.querySelector(".slick-dots");
  // // element?.classList.add("container");
  // console.log({ element });
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
