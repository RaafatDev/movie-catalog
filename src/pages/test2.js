import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./test2.css";

// function gcd(a, b) {
//   if (b === 0) return a;
//   return gcd(b, a % b);
// }

function App() {
  const widthHeight = { width: 800, height: 450 };
  // const [width, setWidth] = useState(800);
  // const [height, setHeight] = useState(450);
  // const [placeholder, setPlaceholder] = useState(true);
  const [loaded, setLoaded] = useState(false);
  // const [loaded, setLoaded] = useState(true);
  const imgSrc = `https://source.unsplash.com/random/${widthHeight.width}x${widthHeight.height}`;
  // const greaterCommonDivisor = gcd(widthHeight.width, widthHeight.height);
  // const ratioW = widthHeight.width / greaterCommonDivisor;
  // const ratioH = widthHeight.height / greaterCommonDivisor;
  // const imgPlaceholder = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ratioW} ${ratioH}"%3E%3C/svg%3E`;
  const imgPlaceholder = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${widthHeight.width} ${widthHeight.height}"%3E%3C/svg%3E`;

  useEffect(() => {
    setLoaded(!loaded);
  }, []);

  return (
    <div className="App">
      {/* <button onClick={() => setLoaded(!loaded)}>
        {loaded ? "Unload image" : "Load image (may take a while)"}
      </button> */}
      {/* <figure> */}
      <img
        // src={loaded ? imgSrc : placeholder ? imgPlaceholder : ""}
        src={loaded ? imgSrc : imgPlaceholder}
        alt="Random unsplah for demonstration purposes"
      />
      <figcaption>
        <div>Reflow won't happen</div>
      </figcaption>
      {/* </figure> */}
    </div>
  );
}
