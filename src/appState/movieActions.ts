import { PopularMovie } from "../model/PopularMovie";

// export type MOVIE_REQUEST = {
//   type: "MOVIE_REQUEST";
// };

// export type fetch = {
//   type?: "MOVIE_REQUEST_SUCCESS";
//   payload?: [];
// };

// export type MOVIE_REQUEST_FAILURE = {
//   type?: "MOVIE_REQUEST_FAILURE";
//   payload?: "";
// };

export type MovieRequestSend = {
  type: string;
  payload?: any;
};

export type MovieRequestSuccess = {
  type: string;
  payload: PopularMovie[];
};

export type MovieRequestFailure = {
  type: string;
  payload: string;
};

// export type Actions = MOVIE_REQUEST | fetch | MOVIE_REQUEST_FAILURE | any;
export type Actions =
  | MovieRequestSend
  | MovieRequestSuccess
  | MovieRequestFailure;

export function movieRequestSend() {
  return {
    type: "MovieRequestSend"
  };
}

export function movieRequestSuccess(movies: PopularMovie[]) {
  return {
    type: "MovieRequestSuccess",
    payload: movies
  };
}

export function movieRequestFailure(error: any) {
  return {
    type: "MovieRequestFailure",
    payload: error
  };
}
