import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// import "./styles.css";
// https://www.youtube.com/watch?v=4F8EYGao9pc
//
// interface StyledButtonProps {
//   fullHeight: any;
// }
interface StyledButtonProps {
  showButton: boolean;
}

const StyledButton = styled.div<StyledButtonProps>`
  display: ${({ showButton }) => (showButton ? "block" : "none")};
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
  initialHeight: number;
  isOpen: any;
  fullHeight: any;
}

/* ${({ isOpen }) =>
    isOpen &&
    css`
      height: 200px;
    `} */

const StyledContent = styled.div<StyledProps>`
  overflow: hidden;
  transition: height ease 0.3s;

  height: ${({ isOpen, fullHeight, initialHeight }) =>
    isOpen ? `${fullHeight.current.scrollHeight}px` : initialHeight + "px"};

  .content {
    border: 1px solid #afafaf;
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
`;

interface Props {
  label: any;
  children: any;
}

const Collapsible: React.FC<Props> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const [initialHeight, setInitialHeight] = useState(0);

  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (parentRef.current) console.log(parentRef.current.scrollHeight);

    if (parentRef.current) {
      let nodeList = parentRef.current.childNodes[0].childNodes[0].childNodes;

      if (nodeList.length > 4) {
        setShowButton(true);
      }

      if (nodeList.length > 0) {
        // take one node element of the node-list and extract the offsetHeight
        setInitialHeight((nodeList[0] as HTMLElement).offsetHeight * 1.5);
      }
    }
  }, []);

  return (
    <div className="collapsible">
      <StyledContent
        initialHeight={initialHeight}
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
      <StyledButton onClick={() => setIsOpen(!isOpen)} showButton={showButton}>
        {label}
      </StyledButton>
      {/* {children} */}
    </div>
  );
};

export default Collapsible;
