import { gql } from "@apollo/client";
import { MovieListPage } from "../fragments/fragmentBasicDetail";

export const QUERY_SEARCH_LIST = gql`
  query FetchSearchList($searchTerm: String) {
    searchMovieList(searchTerm: $searchTerm) {
      ...basicDetailFragment
    }
  }
  ${MovieListPage.fragments.basicDetail}
`;
