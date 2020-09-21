import React, { useState, useEffect } from "react";
import { useLocalSession } from "../hooks/useLocalSessionType";

import { RouteComponentProps } from "react-router";

import { PopularMovie } from "../model/PopularMovie";
import { Layout, Movie } from "../components";

interface Props
  extends RouteComponentProps<
    { keyword: string }, // Types of the parameters for <<< match >>>
    {},
    { keyword: string; searchedMovies: string } // Types of the state parameters for <<< location >>>
  > {}

const SearchResults: React.FC<Props> = ({ match, location }) => {
  //
  const searchTerm = match.params.keyword.substring(1);

  const [localSession, setLocalSession] = useLocalSession(
    "session-type",
    location.state
  );

  useEffect(() => {
    if (location.state && location.state.searchedMovies) {
      setLocalSession(location.state);
    }
  }, [searchTerm]);

  return (
    <Layout>
      <div>
        <div className="container text-light mt-5">
          {match.params && match.params.keyword && (
            <h1>
              {/* Result for: {match.params.keyword.substring(1).toUpperCase()}{" "} */}
              Result for: {localSession && localSession.keyword}{" "}
            </h1>
          )}
          <div className="container">
            <div className="row">
              {localSession &&
                localSession.searchedMovies &&
                JSON.parse(localSession.searchedMovies).map(
                  (x: PopularMovie, index: number) => (
                    <div
                      className="col  m-2 p-0 d-flex align-items-stretch justify-content-center"
                      key={index}
                    >
                      <Movie oneMovie={x} />
                      {/* <Movie oneMovie={x} key={x.id} /> */}
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
