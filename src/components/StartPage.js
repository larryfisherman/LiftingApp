import React from "react";
import styled from "styled-components";
import StartPageSlider from "./StartPageSlider";
function StartPage() {
  return (
    <Content>
      <StartPageSlider />
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  display: block;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 50px);
`;

export default StartPage;
