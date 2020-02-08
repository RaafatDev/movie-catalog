import { useState, useEffect, useCallback, useMemo } from "react";
import {
  omdb_url_before,
  omdb_url_after,
  basePosterUrl
} from "../urls_and_keys";
import { useFetchCombined } from "./useFetchCombined";
interface ICombined {
  imdb_id: string;
}

export function useFetchTMDB(url: string) {
  //   const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imdb_id, setImdbId] = useState("");
  // const [combined, setCombined] = useState({});
  // const [omdb_url, setOmdb_url] = useState("");
  const [combined] = useFetchCombined(url);
  const [sorted, setSorted] = useState();
  // const [omdbData] = useFetch(omdb_url);
  // console.log({ imdbData });
  // console.log({ omdbData });

  console.log({ combined });

  useEffect(() => {
    const sortData = () => {
      // if (combined) {
      // const { imdb_id } = combined;
      // }
      const sorted = {
        imdb_id: combined?.imdb_id,
        // ReleaseDate: json.release_date
        //   ? json.release_date
        //   : json.first_air_date,
        // imdbID: json.id,
        MovieID: JSON.stringify(combined?.id),
        Poster: `${basePosterUrl}w1280${combined?.poster_path}`,
        BigPoster: `${basePosterUrl}w1280${combined?.backdrop_path}`,
        Plot: combined?.overview,
        // Genre: json.genres,
        Videos: combined?.videos,
        Images: combined?.images?.backdrops
      };
      setSorted(sorted);
    };
    sortData();
  }, [url, combined]);

  // const omdb_url = `${omdb_url_before}${imdb_id}${omdb_url_after}`;
  console.log("useFetchTMDB");
  console.log({ combined });

  console.log({ sorted });

  // // const fetchTMDB = useCallback(async () => {
  // const fetchTMDB = async () => {
  //   //   const fetchTMDB = useMemo(async () => {
  //   setIsLoading(true);
  //   try {
  //     // const response = await fetch(url);
  //     // const json = await response.json();

  //     // console.log({ json });

  //     // const imdb_id = imdbData.imdb_id;
  //     // let json = {};
  //     // if (imdbData) {
  //     //   json = { ...imdbData };
  //     // }
  //     // if (imdb_id) {
  //     setOmdb_url(`${omdb_url_before}${imdb_id}${omdb_url_after}`);
  //     // }
  //     let tmdb_data = {
  //       imdb_id: imdbData!.imdb_id,
  //       // ReleaseDate: json.release_date
  //       //   ? json.release_date
  //       //   : json.first_air_date,
  //       // imdbID: json.id,
  //       MovieID: JSON.stringify(json.id),
  //       Poster: `${basePosterUrl}w1280${json.poster_path}`,
  //       BigPoster: `${basePosterUrl}w1280${json.backdrop_path}`,
  //       Plot: json.overview,
  //       // Genre: json.genres,
  //       Videos: json.videos,
  //       Images: json.images.backdrops
  //       // Genres: movie_genre
  //       // ########################3
  //     };

  //     setCombined(tmdb_data);
  //     // console.log("imdb...");

  //     // console.log({ imdb_id });

  //     setImdbId(imdb_id);
  //     // setData(json);
  //   } catch (error) {
  //     setError(error);
  //   }
  //   setIsLoading(false);
  //   // }, [url]);
  // };
  // //   let combined = {};
  // useEffect(() => {
  //   // fetchTMDB();

  //   fetchTMDB();
  // }, [url]);

  // useEffect(() => {
  //   const fetchOMDB = async () => {
  //     setIsLoading(true);
  //     try {
  //       if (omdb_url) {
  //         console.log(
  //           "inside $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44 the If condition"
  //         );

  //         console.log("omdb_url", omdb_url);
  //       }
  //       console.log("here");

  //       const response = await fetch(omdb_url);
  //       const omdb_data = await response.json();

  //       const omdb = {
  //         Actors: omdb_data.Actors,
  //         Country: omdb_data.Country,
  //         Director: omdb_data.Director,
  //         Genre: omdb_data.Genre,
  //         Language: omdb_data.Language,
  //         Production: omdb_data.Production,
  //         Ratings: omdb_data.Ratings,
  //         Runtime: omdb_data.Runtime,
  //         Year: omdb_data.Year,
  //         imdbRating: omdb_data.imdbRating,
  //         Awards: omdb_data.Awards
  //       };
  //       // console.log({ omdb_data });
  //       setCombined(prev => {
  //         return { ...prev, ...omdb };
  //       });

  //       setImdbId(imdb_id);
  //       // setData(omdb_data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchOMDB();
  // }, [omdb_url]);

  // console.log({ combined });

  //   return [data, isLoading, error];
  // return [combined, isLoading, error];
  return [sorted, isLoading, error];
}

// export default useFetch

/*
//! TMDB 
budget: 55000000
homepage: "http://www.jokermovie.net/"
imdb_id: "tt7286456"
original_language: "en"
original_title: "Joker"
popularity: 143.323
poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
production_companies: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
production_countries: (2) [{…}, {…}]
revenue: 1071173263
runtime: 122
spoken_languages: [{…}]
status: "Released"
tagline: "Put on a happy face."
vote_average: 8.3
vote_count: 8718
videos: {results: Array(6)}
images: {backdrops: Array(31), posters: Array(65)}

*/

//! OMDB
/*
Year: "2019"
Rated: "R"
Released: "04 Oct 2019"
Runtime: "122 min"
Genre: "Crime, Drama, Thriller"
Director: "Todd Phillips"
Writer: "Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)"
Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy"
Plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
Language: "English"
Country: "Canada, USA"
Awards: "Won 2 Golden Globes. Another 27 wins & 129 nominations."
Ratings: (3) [{…}, {…}, {…}]
Metascore: "59"
imdbRating: "8.6"
imdbVotes: "593,943"
Type: "movie"
DVD: "17 Dec 2019"
BoxOffice: "N/A"
Production: "Warner Bros. Pictures"
*/
