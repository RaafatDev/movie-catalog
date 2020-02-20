import React from "react";

// import { baseActorFaceUrl } from "../urls_and_keys";

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
  return (
    <div>
      <div>
        {" "}
        <span className="h3">The Cast: </span>
        {actors} ....
        <a
          className="link alert-link text-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          View All Cast
        </a>
      </div>

      <div className="container">
        <div className="row collapse" id="collapseExample">
          {cast.map((member: ICast, index: number) => {
            console.log(member.profile_path);

            const imgSrc = member.profile_path
              ? // ? `https://image.tmdb.org/t/p/original${member.profile_path}`
                // `https://image.tmdb.org/t/p/w92/${member.profile_path}`
                `https://image.tmdb.org/t/p/w185/${member.profile_path}`
              : `${process.env.PUBLIC_URL}/img/no_image.png`;
            return (
              <div
                key={index}
                className="cast-container clo col-6 col-sm-4 col-md-3 p-0 border d-flex align-items-stretch"
              >
                <div className="cast text-center">
                  <div className="cast__img-container">
                    <img src={imgSrc} alt={member.name} />
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
