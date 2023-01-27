import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function CreateWorkoutModal({ closeModal }) {
  const [workoutName, setWorkoutName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.userId);
  }, []);

  return (
    <Background>
      <Container>
        <Content>
          <Buttons>
            <ExitButton
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </ExitButton>
          </Buttons>
          <Title>
            <h1>Add your custom workout!</h1>
          </Title>
          <Form>
            <WorkoutName
              placeholder="Name"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
            ></WorkoutName>
            <ContinueButton
              onClick={(e) => {
                axios.post(
                  `https://localhost:5001/api/account/${userId}/workout`,
                  {
                    workoutName,
                  }
                );
                closeModal(false);
              }}
            >
              CONTINUE
            </ContinueButton>
          </Form>
        </Content>
      </Container>
    </Background>
  );
}

const WorkoutName = styled.input`
  margin: 3px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid black;
  border-radius: 2px;
`;

const Title = styled.div`
  display: inline-block;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 99999;
  inset: 0;
  color: black;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px solid black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const ExitButton = styled.button`
  display: flex;
  background-color: #5463a5;
  border-radius: 2px;
  border: transparent;
  outline: none;
  padding: 8px 8px;
  cursor: pointer;
`;

const ContinueButton = styled.button`
  margin-top: 50px;
  display: flex;
  padding: 10px 80px;
  border-radius: 2px;
  outline: none;
  border: transparent;
  background-color: #5463a5;
  color: #f9f9f9;
  letter-spacing: 2px;
  cursor: pointer;
`;
export default CreateWorkoutModal;
