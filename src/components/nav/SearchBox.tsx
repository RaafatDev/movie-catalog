import React, { ReactElement } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface Props {}

const StyledSearchBox = styled.input`
  border: 0.5px solid #ccc;
  margin: 0px;
  padding: 1px;
`;

const StyledBtnIcon = styled.button`
  /* float: right; */
  /* padding: 5px 10px; */
  background: #ddd;
  font-size: 17px;
  border: none;
  line-height: 13.5px;
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin-top: -3px;
  /* background-color: green; */
`;

function SearchBox({}: Props): ReactElement {
  return (
    <StyledSearchWrapper>
      <StyledSearchBox placeholder="Search..." />
      <StyledBtnIcon>
        <FaSearch />
      </StyledBtnIcon>
    </StyledSearchWrapper>
  );
}

export default SearchBox;
