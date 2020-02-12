import React from "react";
import MoviesList from "../components/MoviesList";
import MainSlider from "../components/slider/MainSlider";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="mt-4 pt-3 border">
      <MainSlider />
      <MoviesList />
    </div>
  );
};

export default Home;
