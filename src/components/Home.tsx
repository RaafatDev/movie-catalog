// import React, { Suspense } from "react";
import React from "react";

import MoviesList from "./movies-list/MoviesList";
import MainSlider from "./slider/MainSlider";
// const MovieListLazy = React.lazy(() => import("./movies-list/MoviesList"));

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    // <div className="mt-4 pt-3">
    <div>
      {/* <Suspense
        fallback={
          <div className="text-danger bg-light">
            Looooooooooooding !!!!!!!!!!
          </div>
        }
      > */}
      <MainSlider />
      {/* <MovieListLazy /> */}
      {/* </Suspense> */}
      <MoviesList />
    </div>
  );
};

export default Home;
