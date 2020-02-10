//

export const useURL = (isMovie: boolean, movieId: string) => {
  // const url = isMovie
  //   ? `${tmdb_url_before}${movieId}${tmdb_url_after}`
  //   : `${tv_tmdb_url_before}${movieId}${tv_tmdb_url_after}`;

  const url = isMovie
    ? `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos,images,credits,external_ids&include_image_language=en,null`
    : `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos,images,credits,external_ids&include_image_language=en,null`;

  return { url };
};
// append_to_response=videos,images,credits,external_ids
