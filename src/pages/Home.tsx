import React from "react";

import { QUERY_MOVIES_LIST, QUERY_TV_SHOW_LIST } from "../graphql/queries";
import { useQuery } from "@apollo/client";

import { Layout, MoviesList, MainSlider } from "../components";

interface Props {}

const Home: React.FC<Props> = () => {
  const {
    loading: movieListLoading,
    error: movieListError,
    data: movieListData,
  } = useQuery(QUERY_MOVIES_LIST);

  const {
    loading: TVShowListLoading,
    error: TVShowListError,
    data: TVShowListData,
  } = useQuery(QUERY_TV_SHOW_LIST);

  if (movieListLoading || TVShowListLoading) return <div>Loading ... </div>;
  if (movieListError || TVShowListError)
    return <div>Something went wrong {":("}</div>;

  return (
    <Layout>
      <div>
        {/* <MainSlider movieList={movieListData.movieList} /> */}

        <MoviesList movieList={movieListData.movieList} listType={"Movies"} />
        <MoviesList
          movieList={TVShowListData.TVShowList}
          listType={"TV Shows"}
        />
      </div>
    </Layout>
  );
};

export default Home;
