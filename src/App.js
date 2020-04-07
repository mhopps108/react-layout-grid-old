import React, { useState } from "react";
import { Header, Sidebar, Toolbar, Main } from "./components";
import styled, { css } from "styled-components";
import { device } from "./devices";

import "boxicons";

const StyledApp = styled.div`
  /* border: 2px solid purple; */
  font-family: sans-serif;
  max-width: 1000px;
  /* height: 100vh; */
  display: grid;
  grid-template-areas:
    "header"
    "toolbar"
    "main";
  grid-template-columns: 1fr;
  grid-template-rows: 55px 45px 1fr;
  margin: 0 auto;

  @media ${device.min.desktop} {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar toolbar"
      "sidebar main";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 55px 45px 1fr;
  }
`;

export default function App() {
  const [sidebarVisable, setSidebarVisable] = useState(false);
  const toggleSidebar = () => {
    console.log("toggleSideDrawer clicked - App");
    setSidebarVisable(!sidebarVisable);
  };
  return (
    <StyledApp>
      <Header toggleSidebar={toggleSidebar} />
      <Toolbar />
      <Sidebar isOpen={sidebarVisable} toggleOpen={toggleSidebar} />
      <Main />
    </StyledApp>
  );
}