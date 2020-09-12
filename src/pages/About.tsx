import React from "react";
import Layout from "../components/Layout";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Layout>
      <div
        className="container-fluid about-container text-center bg-dark font-weight-bold text-light"
        style={{ height: "100vh" }}
      >
        <div className="row h-100 border border-light border my-auto">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <p style={{ width: "75%" }} className="about-text">
              this website is meant to give the user enough information to
              decide whether if a movie is worth watching from the user
              perspective, by providing the user with information related to the
              movie like the (actors, directors, overview, release-date ,
              Ratings ...) and movie images and trailers, by using the public
              APIs from TMDB and OMDB
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
