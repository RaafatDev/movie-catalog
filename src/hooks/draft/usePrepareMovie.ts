import { useState, useEffect } from "react";
// import { basePosterUrl } from "../../urls_and_keys";
// import { basePosterUrl } from "../../urls_and_keys";

const usePrepareMovie = (combined: any) => {
  console.log({ rowCombinedMovie: combined });

  const [state, setState] = useState();

  const sortMovie = () => {
    // console.log("object length");

    // console.log(Object.keys(rowCombinedMovie).length);

    if (!combined) return;
    // if (rowCombinedMovie === {}) return;
    // if (!rowCombinedMovie.external_ids) return;
    if (Object.keys(combined).length === 0) return;
    // console.log({ rowCombinedMovie });

    const created_by =
      combined.created_by &&
      combined.created_by.map((creator: any) => creator.name).join();

    const movieArrTwo = {
      created_by,
      episode_run_time: combined.episode_run_time,
      first_air_date: combined.first_air_date,
      in_production: combined.in_production,
      languages: combined.languages,
      last_air_data: combined.last_air_date,
      networks: combined.networks,
      number_of_episodes: combined.number_of_episodes,
      number_of_seasons: combined.number_of_seasons,

      original_country: combined.original_country,

      production_companies: combined.production_companies,

      videos: combined.videos.results,
      images: combined.images,
      credits: combined.cast,

      //   isMovie: rowMovie.title ? true : false,
      //   title: rowMovie.title ? rowMovie.title : rowMovie.name,
      //   release_date: rowMovie.release_date
      // ? rowMovie.release_date
      // : rowMovie.first_air_date,
      imdb_id: combined?.external_ids.imdb_id
      //   id: JSON.stringify(rowMovie.id),
      //   poster_path: `${basePosterUrl}w1280${rowMovie.poster_path}`,
      //   backdrop_path: `${basePosterUrl}w1280${rowMovie.backdrop_path}`,
      //   overview: rowMovie.overview,
      //   genre_ids: rowMovie.genre_ids
      // Genres: movie_genre
    };

    setState({ ...movieArrTwo });
    console.log({ rowCombinedMovie: combined });
  };

  useEffect(() => {
    sortMovie();
  }, [combined]);
  return [state];
};

export default usePrepareMovie;
