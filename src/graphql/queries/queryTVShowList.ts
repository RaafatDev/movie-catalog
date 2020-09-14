import { gql } from "@apollo/client";
import { MovieListPage } from "../fragments/fragmentBasicDetail";

export const QUERY_TV_SHOW_LIST = gql`
  query FetchTVShowList {
    TVShowList {
      ...basicDetailFragment
    }
  }
  ${MovieListPage.fragments.basicDetail}
`;
