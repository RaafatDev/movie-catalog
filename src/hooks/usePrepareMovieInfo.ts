import { PopularMovie } from "../model/PopularMovie";
import { tvGenres, movieGenres } from "../model/genre";
// const imgBaseUrl = "https://image.tmdb.org/t/p/w1280/";
const basePosterUrl = `https://image.tmdb.org/t/p/`;

type Hook = (rowArr: PopularMovie[]) => PopularMovie[];

// useMovieArrDataSorting
const usePrepareMovieInfo: Hook = (rowArr: PopularMovie[]) => {
  //   const [movieArr, setMovieArr] = useState<any>([]);
  // console.log({ rowArr });

  let moviesList: any[] = [];

  //   function inner() {
  // console.log("llslslslsl");
  for (const movie of rowArr) {
    let movie_genre = "";
    for (const genre of movie.genre_ids) {
      const element = genre;
      let found;
      if (movie.name) {
        // if it is a tv show then the genres are different from those of the movie genres
        found = tvGenres.find(genre => genre.id === element);
      } else {
        found = movieGenres.find(genre => genre.id === element);
      }

      if (found) {
        if (movie_genre === "") {
          movie_genre = found.name;
        } else {
          movie_genre = movie_genre + ", " + found.name;
        }
      }
    }

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
    moviesList.push(movieArrTwo);
  }
  // setMovieArr(moviesList);
  //   }
  //   useEffect(() => {
  // inner();
  //   });
  //   return moviesList;
  return moviesList;
};

export default usePrepareMovieInfo;
