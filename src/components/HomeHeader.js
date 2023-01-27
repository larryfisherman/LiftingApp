import React from "react";
import styled from "styled-components";

function HomeHeader() {
  const test1 = "test1";
  const test2 = "test2";
  return (
    <Container>
      <Content>
        {/* <h1>Outrun your bad habbits</h1>
        <span>
          Give the world all you've got while LiftingApp handles all the boring
          stuff for you!
        </span> */}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  ${"" /* background-color: rgb(84, 99, 165, 0.5); */}
  margin: 15px 20px 0px 20px;
  padding: 10px;
`;

const Content = styled.div`
  margin: 20px;
  color: #f9f9f9;
  text-align: center;
`;

export default HomeHeader;
