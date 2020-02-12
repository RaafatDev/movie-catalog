import React, { useRef, useEffect } from "react";

interface Props {
  video: {
    name: string;
    key: string;
    id: string;
  };
  index: number;
}

const MovieVideos: React.FC<Props> = ({ video, index }) => {
  // let classShow = "show";
  //
  console.log(video.key);
  console.log(video.id);

  const videoSrc = "https://www.youtube.com/embed/" + video.key;

  const iframeRef = useRef<any>(null);
  const modalRef = useRef<any>(null);

  const playVideo = () => {
    // modalRef.current.display = "block";
    // classShow = "show"
    iframeRef.current.src = videoSrc;
    console.log(modalRef.current.display);
  };

  const stopVideo = () => {
    // iframeRef.current.src = "";
    iframeRef.current.src = iframeRef.current.src;
  };

  useEffect(() => {
    modalRef.current.addEventListener("click", stopVideo);
  }, []);
  return (
    <div>
      {/* <iframe
        ref={iframeRef}
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/3hSjs2hBa94`}
        // src={""}
        allowFullScreen
      ></iframe> */}
      {/* <h1> Videos </h1> */}

      <button
        type="button"
        className="btn btn-primary mt-3"
        data-toggle="modal"
        // data-target=".bd-example-modal-lg"
        // data-target={"#" + video.key}
        data-target={"#" + video.key + index.toString()}
        // data-target={"#" + video.id}
        onClick={playVideo}
      >
        {video.name}
      </button>
      <div
        // className={`modal fade bd-example-modal-lg ${classShow}`}
        className="modal fade bd-example-modal-lg"
        // id={video.key}
        id={video.key + index.toString()}
        // id={video.id}
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        // style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {video.name}
              </h5>
              {/* Close Button !!!!! */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={stopVideo}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>{" "}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                ref={iframeRef}
                className="embed-responsive-item"
                // src={`https://www.youtube.com/embed/` + video.key}
                src={""}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* End Modal  */}
    </div>
  );
};

export default MovieVideos;
