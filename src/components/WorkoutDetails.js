import React, { useState } from "react";
import styled from "styled-components";
import Exercise from "./Exercise";
import workoutImageDraw from "../utility/workoutImage";
import CreateExercise from "./CreateExercise";

function WorkoutDetails() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Background src={workoutImageDraw()} />
      <Content>
        <ExerciseList>
          <Exercise />
        </ExerciseList>
        {showModal && <CreateExercise closeModal={setShowModal} />}
        <AddExerciseButton onClick={() => setShowModal(true)}>
          +
        </AddExerciseButton>
      </Content>
    </Container>
  );
}

const AddExerciseButton = styled.button`
  border: 2px solid transparent;
  border-radius: 100%;
  font-size: 60px;
  padding: 0 18px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255);
  }
`;

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
  background-color: rgba(0, 0, 0, 0.6);
  overflow-x: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0);
`;

export default WorkoutDetails;
