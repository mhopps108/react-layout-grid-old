import React from "react";
import styled from "styled-components/macro";

const StyledToolbar = styled.div`
  background-color: #777;
  grid-area: toolbar;
  /* position: sticky; */
  /* top: 55px; */
  display: flex;
`;

export default function Toolbar({ tempProps }) {
  return <StyledToolbar>ListName #100</StyledToolbar>;
}
