// import { QUERY_MOVIES_LIST } from "./queryMovieList";
import { gql } from "@apollo/client";

export const QUERY_MOVIE_DETAIL = gql`
  query QueryMovieDetail($id: ID, $isMovie: Boolean) {
    movieDetail(id: $id, isMovie: $isMovie) {
      TMDB_MovieDetail {
        imdb_id
        id
        title
        number_of_seasons
        number_of_episodes
        release_date
        poster_path
        backdrop_path
        overview
        credits {
          name
          character
          profile_path
        }
        budget
        videos {
          name
          type
          key
        }
        images {
          backdrops {
            file_path
          }
          posters {
            file_path
          }
        }
      }
      OMDB_MovieDetail {
        Genre
        Director
        Writer
        Actors
        Country
        Awards
        Ratings {
          Source
          Value
        }
        Runtime
        imdbRating
        Production
      }
    }
  }
`;
