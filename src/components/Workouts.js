import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateWorkoutModal from "./CreateWorkoutModal";

function Workouts() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/account/2/workout")
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <>
      <Container>
        <Content>
          <Image onClick={() => setShowModal(true)}>
            <img src={"./images/create-workout.jpg"} alt="" />
          </Image>
          <Image>
            <Link to={"/WorkoutsDiary"}>
              <img src={"./images/workout-diary.jpg"} alt="" />
            </Link>
          </Image>
        </Content>
      </Container>
      {showModal && <CreateWorkoutModal closeModal={setShowModal} />}
    </>
  );
}

const Container = styled.main`
position: relative;
display: block;
min-height: 100vh;
overflow-x: hidden;
padding: 0 calc(3.5vw + 50px);
margin: 5rem;

&:after {
  position: absolute;
  content: "";
  z-index: -1;
  inset: 0;
    
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Image = styled.div`
  padding-top: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 25px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -3;
    &:hover {
      background-color: rgb(0, 0, 0, 0.5);
    }
  }
  &:hover {
    transform: scale(1.01);
    transition: all 0.3s ease-out;
    border: 2px solid rgb(255, 255, 255, 1);
    background-color: rgb(0, 0, 0, 0.5);
  }
`;

export default Workouts;
