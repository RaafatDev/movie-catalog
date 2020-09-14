import { gql } from "@apollo/client";

type FragmentType = {
  fragments: {
    basicDetail: any;
  };
};

// let MovieListPage: FragmentType = {};

export const MovieListPage: FragmentType = {
  fragments: {
    basicDetail: gql`
      fragment basicDetailFragment on MovieList {
        isMovie
        title
        release_date
        id
        poster_path
        backdrop_path
        overview
        genre_ids
      }
    `,
  },
};
