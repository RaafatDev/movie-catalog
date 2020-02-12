import React from "react";
import { PopularMovie } from "../model/PopularMovie";
import { Link } from "react-router-dom";

interface MovieProps {
  oneMovie: PopularMovie;
}

const Movie: React.FC<MovieProps> = ({ oneMovie }) => {
  // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

  // console.log({ oneMovie });

  // const { id, overview, poster_path, title, release_date } = oneMovie;
  const { id, poster_path, title, release_date } = oneMovie;

  return (
    // <div className="shadow text-center d-flex flex-column align-items-stretch">
    <div className="shadow text-center">
      <Link
        to={{
          pathname: `/${id}/${title.split(" ").join("-")}`,
          state: {
            movie: JSON.stringify(oneMovie)
          }
        }}
      >
        <img
          style={{ minWidth: "200px", width: "100%" }}
          src={poster_path}
          alt={title + id}
        />
      </Link>
      <div className="p-2">
        <p className="font-weight-bold lead mb-0">{title}</p>
        <p className="lead">({release_date}) </p>
      </div>
    </div>
  );
  // }
};

export default Movie;

/*

<button type="button" class="btn btn-success pop" data-container="body" data-toggle="popover" data-placement="right" data-content="Optional parameter: Skip if this was not requested<br>                                    A placement group is a logical grouping of instances within a single Availability                                     Zone. Using placement groups enables applications to get the full-bisection bandwidth                                     and low-latency network performance required for tightly coupled, node-to-node                                     communication typical of HPC applications.<br>                                    This only applies to cluster compute instances: cc2.8xlarge, cg1.4xlarge, cr1.8xlarge, hi1.4xlarge and hs1.8xlarge.<br>                                    More info: <a href=&quot;http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html&quot; target=&quot;_blank&quot;>Click here...</a>"
  data-original-title="" title="">
    Okay one more time... !

    </button>
    */
