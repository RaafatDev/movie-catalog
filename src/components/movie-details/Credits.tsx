import React from "react";

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
  // console.log("cart", cast);
  // console.log("actors", actors);

  return (
    <div>
      <div>
        {cast && cast.length === 0 && actors && actors !== "N/A" && (
          <>
            <span className="h3">The Cast: </span> {actors}
          </>
        )}
        <div className="container">
          <div className="row justify-content-center">
            {cast.map((member: ICast, index: number) => {
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Credits;
