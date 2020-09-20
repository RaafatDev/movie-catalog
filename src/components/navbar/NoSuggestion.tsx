import React from "react";

interface Props {
  searchTerm: string;
}

const NoSuggestion: React.FC<Props> = ({ searchTerm }) => {
  return (
    <div>
      <div className="suggestions__item d-flex border bg-white">
        <div className="suggestions__item__info pl-2">
          <p className="suggestions__item__info__title m-0">
            {searchTerm === "Loading" ? (
              <span
                className="m-0 font-weight-bold"
                style={{ color: "rgb(0, 123, 255)" }}
              >
                Loading ...{" "}
              </span>
            ) : (
              <>
                Nothing found related to: "
                <span className="font-weight-bold">{searchTerm}</span>"{" "}
              </>
            )}
          </p>
          <p className="suggestions__item__info__year m-0 text-muted">
            {searchTerm === "Loading" ? "" : `pleas try something else `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoSuggestion;
