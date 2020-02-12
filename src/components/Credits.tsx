import React from "react";
// import no_image from ""

import { baseActorFaceUrl } from "../urls_and_keys";

interface ICast {
  character: string;
  name: string;
  profile_path: string;
}
interface Props {
  cast: ICast[];
  actors: string;
}

const Credits: React.FC<Props> = ({ cast, actors }) => {
  //   console.log({ props });

  // const test = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div>
        {" "}
        <span className="h3">The Cast: </span>
        {actors} ....
        <a
          // className="btn btn-primary btn-sm"
          className="link alert-link text-primary"
          // className=" stretched-link"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          View All Cast
        </a>
      </div>

      {/* <div>{cast.} </div> */}
      {/* {cast.map((x: any) => { */}
      {/* <div className="row"> */}
      {/* <div className="container bg-danger collapse" id="collapseExample"> */}
      <div className="container">
        <div className="row collapse" id="collapseExample">
          {cast.map((member: ICast, index: number) => {
            const imgSrc = member.profile_path
              ? `https://image.tmdb.org/t/p/original${member.profile_path}`
              : `${process.env.PUBLIC_URL}/img/no_image.png`;
            return (
              <div
                key={index}
                className="clo col-6 col-sm-4 col-md-3 p-0 border d-flex align-items-stretch"
                style={{ maxWidth: "180px" }}
              >
                <div className="cast text-center">
                  <div className="cast__img-container">
                    <img
                      style={{
                        width: "100%",
                        height: "200px"
                      }}
                      src={imgSrc}
                      alt={member.name}
                    />
                  </div>
                  <div className="cast__character">
                    <span className="lead">{member.name} </span>
                    <br />
                    <span className="">{member.character} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Credits;
