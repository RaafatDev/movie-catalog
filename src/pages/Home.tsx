// import React, { Suspense } from "react";
import React from "react";
import Layout from "../components/Layout";

import MoviesList from "../components/movies-list/MoviesList";
import MainSlider from "../components/slider/MainSlider";
// const MovieListLazy = React.lazy(() => import("./movies-list/MoviesList"));

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    // <div className="mt-4 pt-3">
    <Layout>
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
    </Layout>
  );
};

export default Home;
