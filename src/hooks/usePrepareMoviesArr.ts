import { useState, useEffect } from "react";
import { movieGenres } from "../model/genre";
import { PopularMovie } from "../model/PopularMovie";
import { basePosterUrl } from "../urls_and_keys";
// import { movieRequestSuccess } from "../appState/movieActions";

const usePrepareMoviesArr = (rowArr: any, dispatch: any) => {
  //
  const [sortedArr, setSortedArr] = useState();

  // console.log("usePrepareMoviesArr 1");

  // console.log({ rowArr });
  // console.log({ sortedArr });

  const sort = () => {
    let Arr: any[] = [];
    console.log("usePrepareMoviesArr 2");
    if (!rowArr) return;
    console.log("usePrepareMoviesArr 3");
    console.log({ rowArr });

    rowArr.results.map((movie: PopularMovie) => {
      const movie_genre = movie.genre_ids
        .map((number: any) => {
          return movieGenres.find(genreObject => {
            return genreObject.id === number;
          })?.name;
        })
        .join();

      // console.log("usePrepareMoviesArr 4");
      const movieArrTwo = {
        isMovie: movie.title ? true : false,
        title: movie.title ? movie.title : movie.name,
        release_date: movie.release_date
          ? movie.release_date
          : movie.first_air_date,
        // imdbID: movie.id,
        id: JSON.stringify(movie.id),
        poster_path: `${basePosterUrl}w1280${movie.poster_path}`,
        backdrop_path: `${basePosterUrl}w1280${movie.backdrop_path}`,
        overview: movie.overview,
        genre_ids: movie.genre_ids,
        Genres: movie_genre
      };
      Arr.push(movieArrTwo);
    });

    setSortedArr([...Arr]);
  };
  useEffect(() => {
    // setSortedArr(rowArr);
    sort();
  }, [rowArr]);

  return [sortedArr];
};

export default usePrepareMoviesArr;
