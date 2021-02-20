import React from "react";
import styled from "styled-components";

const SContainer = styled.footer`
    min-height: 35vh;
    color: white;
`;

interface Props {}

const Footer = (props: Props) => {
    return (
        <SContainer>
            <p>Footer !!</p>
        </SContainer>
    );
};

export default Footer;
