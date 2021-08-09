import React from "react";
import styled from "styled-components";
import Exercise from "./Exercise";
import workoutImageDraw from "../utility/workoutImage";

function WorkoutDetails() {
  return (
    <Container>
      <Background src={workoutImageDraw()} />

      <Content>
        <ExerciseList>
          <Exercise />
        </ExerciseList>
      </Content>
    </Container>
  );
}

const Background = styled.img`
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
`;

const ExerciseList = styled.ul`
  list-style-type: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0);
`;

const Title = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default WorkoutDetails;
