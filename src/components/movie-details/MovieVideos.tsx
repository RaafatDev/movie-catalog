import React, { useRef, useEffect } from "react";

interface Props {
    video: {
        name: string;
        key: string;
        id: string;
        type: string;
    };
    index: number;
}

const MovieVideos: React.FC<Props> = ({ video, index }) => {
    // console.log("the videoooooooooo: ", video);

    const videoSrc = "https://www.youtube.com/embed/" + video.key;

    const iframeRef = useRef<any>(null);
    const modalRef = useRef<any>(null);

    const playVideo = () => {
        iframeRef.current.src = videoSrc;
    };

    const stopVideo = () => {
        iframeRef.current.src = iframeRef.current.src;
    };

    useEffect(() => {
        modalRef.current.addEventListener("click", stopVideo);
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex align-items-center  border-bottom">{video.name}</div>
                    <div className="col d-flex align-items-center justify-content-center p-1">
                        <button
                            type="button"
                            className="btn btn-primary trailer-button"
                            data-toggle="modal"
                            data-target={"#" + "trailer" + index.toString()}
                            onClick={playVideo}
                        >
                            {/* Watch {video.type} */}
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal fade bd-example-modal-lg"
                id={"trailer" + index.toString()}
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                {video.name}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={stopVideo}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>{" "}
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe ref={iframeRef} className="embed-responsive-item" src={""} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieVideos;
