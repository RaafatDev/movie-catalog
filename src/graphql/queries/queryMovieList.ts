import { gql } from "@apollo/client";
import { MovieListPage } from "../fragments/fragmentBasicDetail";

export const QUERY_MOVIES_LIST = gql`
  query FetchMovieList {
    movieList {
      ...basicDetailFragment
    }
  }
  ${MovieListPage.fragments.basicDetail}
`;
