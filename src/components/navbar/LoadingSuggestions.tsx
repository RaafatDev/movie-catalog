import React from "react";

interface Props {
  // searchTerm: string;
}

const LoadingSuggestions: React.FC<Props> = () => {
  return (
    <div>
      <div className="suggestions__item d-flex border bg-white">
        <div className="suggestions__item__info pl-2">
          <p className="suggestions__item__info__title m-0">
            <span
              className="m-0 font-weight-bold"
              style={{ color: "rgb(0, 123, 255)" }}
            >
              Loading ...{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSuggestions;
