import React, { useEffect, useContext, useState } from "react";

import { MoviesContext } from "../App";
import { PopularMovie } from "../model/PopularMovie";
import {
  movieRequestSend,
  movieRequestSuccess,
  movieRequestFailure
} from "../appState/movieActions";
import usePrepareMovieInfo from "../hooks/usePrepareMovieInfo";

import Movie from "./Movie";

// import { Container, Row, Col } from "react-bootstrap";
import {
  popular_url,
  popular_tv_url,
  tv_external_id,
  experimental
} from "../urls_and_keys";
import useSortMovieInfo from "../hooks/useSortMovieInfo";

const MoviesList: React.FC = () => {
  // const contextTest = useContext<any>(MoviesContext);
  const [data, setData] = useState();
  const [newMessage] = useSortMovieInfo(data);
  // console.log(" the new message ", newMessage);

  // setNewMessage("this is the stuff that i am talking about");
  const { state, dispatch } = useContext<any>(MoviesContext);
  // console.log("llll");

  const SayHello = (rowArr: PopularMovie[]) => {
    const Arr = usePrepareMovieInfo(rowArr);
    // console.log("arr");

    return Arr;
  };
  const fetchingMovies = async () => {
    try {
      // const resTv = await fetch(tv_external_id);
      const resTv = await fetch(experimental);
      const dataTv = await resTv.json();
      console.log("tv Shows New ##########################################");
      console.log({ dataTv });

      dispatch(movieRequestSend());
      // const res = await fetch(popular_url);
      const res = await fetch(popular_tv_url);
      const data = await res.json();

      if (!data.results) throw Error;
      const results = await data.results;

      console.log({ data });

      setData(results);
      const Arr = SayHello(data.results);

      dispatch(movieRequestSuccess(Arr));
    } catch (e) {
      dispatch(movieRequestFailure(e));
    }
  };
  useEffect(() => {
    fetchingMovies();
  }, []);
  return (
    // <div className="container-lg bg-primary p-4 p-md-0 mt-4">
    <div className="container bg-primary p-4 p-md-0 mt-4">
      {/* <Container>
        <Row>
          <Col xs className="border m-2 p-0">
            Test
          </Col>
          {state.movieArr &&
            state.movieArr.map((x: PopularMovie) => (
              <Col className="border m-2 p-0">
                <Movie oneMovie={x} key={x.id} />
              </Col>
            ))}
        </Row>
      </Container> */}

      <div className="container">
        <div className="row">
          {state.movieArr &&
            state.movieArr.map((x: PopularMovie) => (
              <div
                // className="col border m-2 p-0 d-flex align-items-stretch"
                className="col border m-2 p-0 d-flex align-items-stretch"
                key={x.id}
              >
                <Movie oneMovie={x} key={x.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
