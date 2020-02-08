import { PopularMovie } from "../model/PopularMovie";
import { tvGenres, movieGenres } from "../model/genre";
import { useState, useEffect } from "react";
import { Prev } from "react-bootstrap/lib/Pagination";
// const imgBaseUrl = "https://image.tmdb.org/t/p/w1280/";
const basePosterUrl = `https://image.tmdb.org/t/p/`;

// type Hook = (rowArr: PopularMovie[]) => PopularMovie[];

const useSortMovieInfo = (rowArr: PopularMovie[]) => {
  const [genre, setGenre] = useState<any>([]);

  // console.log("useSortMovieInfo");

  // console.log("inside the new useSortMovieInfo", { rowArr });

  const sortMovie = () => {
    rowArr.map(movie => {
      const movie_genre = movie.genre_ids
        .map((number: any) => {
          return movieGenres.find(genreObject => {
            return genreObject.id === number;
          })?.name;
        })
        .join();

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
      setGenre((prev: any) => {
        return [...prev, movieArrTwo];
      });
    });
  };

  useEffect(() => {
    if (rowArr) {
      sortMovie();
      // setGenre(test);
    }
  }, [rowArr]);
  // console.log(genre);

  return [genre];
  // return [test];
};

export default useSortMovieInfo;

/*  


      const test = rowArr.map(movie => {
        return movie.genre_ids
          .map((number: any) => {
            return movieGenres.find(genreObject => {
              return genreObject.id === number;
            })?.name;
          })
          .join();
      });

*/
