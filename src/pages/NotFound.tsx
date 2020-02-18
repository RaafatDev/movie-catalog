import React, { ReactElement } from "react";

interface Props {}

export default function NotFound({}: Props): ReactElement {
  return (
    <div
      className="container-fluid text-center bg-dark font-weight-bold text-light"
      style={{ height: "100vh" }}
    >
      <div className="row h-100  my-auto">
        <div className="col-12  d-flex flex-column justify-content-center">
          <p className="display-1">404</p>
          <p>Not Found...!!!!! </p>
        </div>
      </div>
    </div>
  );
}
