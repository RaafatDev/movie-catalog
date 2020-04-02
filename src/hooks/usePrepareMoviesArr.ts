import { useState, useEffect } from "react";
import { movieGenres } from "../model/genre";
import { PopularMovie } from "../model/PopularMovie";
import { basePosterUrl } from "../urls_and_keys";

const usePrepareMoviesArr = (rowArr: any) => {
  //
  const [sortedArr, setSortedArr] = useState<any>([]);

  const sortData = (rowArr: any) => {
    let movieInfoArr: any[] = [];

    if (!rowArr) return;

    if (rowArr.length === 0) return;

    rowArr.results.map((movie: PopularMovie) => {
      if (!movie.genre_ids) return;
      const movie_genre = movie.genre_ids
        .map((number: any) => {
          return movieGenres.find(genreObject => {
            return genreObject.id === number;
          })?.name;
        })
        .join(", ");

      const movieInfo = {
        isMovie: movie.title ? true : false,
        title: movie.title ? movie.title : movie.name,
        release_date: movie.release_date
          ? movie.release_date
          : movie.first_air_date,
        // imdbID: movie.id,
        id: JSON.stringify(movie.id),
        poster_path: movie.poster_path
          ? // ? `${basePosterUrl}w1280${movie.poster_path}`
            `${basePosterUrl}w300${movie.poster_path}`
          : `${process.env.PUBLIC_URL}/img/no_image.png`,
        backdrop_path: movie.backdrop_path
          ? // ? `${basePosterUrl}w1280${movie.backdrop_path}`
            `${basePosterUrl}w780${movie.backdrop_path}`
          : `${process.env.PUBLIC_URL}/img/no_image.png`,
        overview: movie.overview,
        genre_ids: movie.genre_ids,
        Genres: movie_genre
      };
      movieInfoArr.push(movieInfo);
      // return Arr.push(movieArrTwo);
    });

    setSortedArr([...movieInfoArr]);
  };
  useEffect(() => {
    sortData(rowArr);
  }, [rowArr]);

  return [sortedArr, sortData];
};

export default usePrepareMoviesArr;
