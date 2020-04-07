import React from "react";
import styled, { css } from "styled-components/macro";
import { device } from "../devices";

const StyledMain = styled.div`
  background-color: lightgray;
  grid-area: main;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const MovieListItem = styled.div`
  min-width: 350px;
  width: 350px;
  height: 150px;
  max-width: 400px;
  margin: 10px;
  background: white;
`;

export default function Main() {
  return (
    <StyledMain>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
        return <MovieListItem key={item} />;
      })}
    </StyledMain>
  );
}
