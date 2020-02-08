import { Actions } from "./movieActions";

export const initialState = {
  loading: false,
  movieArr: [],
  error: ""
};

export type State = {
  loading: boolean;
  movieArr: any[];
  error: string;
};
// export type Actions = MOVIE_REQUEST | fetch | MOVIE_REQUEST_FAILURE | any;
export const movieReducer = (
  state: State = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case "MovieRequestSend":
      return {
        ...state,
        loading: true
      };

    case "MovieRequestSuccess":
      return {
        ...state,
        loading: false,
        movieArr: action.payload
      };

    case "MovieRequestFailure":
      return {
        // ...state,
        loading: false,
        movieArr: [],
        // error: action.payload
        error: "something went wrong! "
      };

    default:
      return state;
  }
};

// type MOVIE_REQUEST = {
//   type: "MOVIE_REQUEST";
// };

// type fetch = {
//   type?: "MOVIE_REQUEST_SUCCESS";
//   payload?: [];
// };

// type MOVIE_REQUEST_FAILURE = {
//   type?: "MOVIE_REQUEST_FAILURE";
//   payload?: "";
// };
