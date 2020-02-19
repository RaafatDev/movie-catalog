import React, { Suspense } from "react";

import MoviesList from "./movies-list/MoviesList";
import MainSlider from "./slider/MainSlider";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="mt-4 pt-3">
      <MainSlider />
      <MoviesList />
    </div>
  );
};

export default Home;
