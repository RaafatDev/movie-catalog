// import React, { Suspense } from "react";
import React from "react";
import Layout from "../components/Layout";

import MoviesList from "../components/movies-list/MoviesList";
import MainSlider from "../components/slider/MainSlider";
// const MovieListLazy = React.lazy(() => import("./movies-list/MoviesList"));
import MovieGrid from "../components/movie-grid/MovieGrid";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <div>
        {/* <MovieGrid /> */}
        <MainSlider />
        <MoviesList />
      </div>
    </Layout>
  );
};

export default Home;
