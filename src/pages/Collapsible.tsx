import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
// import "./styles.css";
// https://www.youtube.com/watch?v=4F8EYGao9pc
//
// interface StyledButtonProps {
//   fullHeight: any;
// }

// const StyledButton = styled.button<StyledProps>`
const StyledButton = styled.div`
  /* position: absolute; */
  /* z-index: 4; */
  /* transform: translateY(1000px); */

  background: blue;
  border: none;
  cursor: pointer;
  font: unset;
  padding: 0.3rem;
  border-radius: 5px;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

interface StyledProps {
  showTop: number;
  isOpen: any;
  fullHeight: any;
}

const StyledContent = styled.div<StyledProps>`
  overflow: hidden;
  /* height: 0px; */
  /* transform-origin: top left; */
  transition: height ease 0.3s;

  height: ${({ isOpen, fullHeight, showTop }) =>
    // isOpen ? `${fullHeight.current.scrollHeight}px` : "0px"};
    isOpen ? `${fullHeight.current.scrollHeight}px` : showTop + "px"};
  /* ${({ isOpen }) =>
    isOpen &&
    css`
      height: 200px;
    `} */

  .content {
    border: 1px solid #afafaf;
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
`;

interface Props {
  showTop: number;
  label: any;
  children: any;
}

const Collapsible: React.FC<Props> = ({ showTop, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  // const [test, setTest] = useState(true);

  // useEffect(() => {
  //   if (parentRef.current) console.log(parentRef.current.scrollHeight);
  // }, []);

  return (
    <div className="collapsible">
      <StyledContent
        showTop={showTop}
        ref={parentRef}
        fullHeight={parentRef}
        isOpen={isOpen}
        // style={
        //   isOpen
        //     ? { height: parentRef.current.scrollHeight + "px" }
        //     : { height: "0px" }
        // }
      >
        <div className="content">{children}</div>
      </StyledContent>
      <StyledButton
        // isOpen={isOpen}
        // fullHeight={parentRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </StyledButton>
      {/* {children} */}
    </div>
  );
};

export default Collapsible;
// export default function App() {
//   return (
//     <div className="App">
//       <Collapsible label="See More 🍕"> whiiiiii</Collapsible>
//       <Collapsible label="See More Two">
//         <div>Hi </div>
//         <div>Hi </div>
//         <div>Hi </div>
//       </Collapsible>
//       <Collapsible label="See More Three">wwwww</Collapsible>
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
