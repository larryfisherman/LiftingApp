import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectWorkouts } from "../store/workoutsSlice";
import { Link } from "react-router-dom";
import workoutImage from "../utility/workoutImage";

function WorkoutsDiary() {
  const workouts = useSelector(selectWorkouts);
  console.log(workouts);
  console.log(workoutImage());

  return (
    <Container>
      <Content>
        {workouts &&
          workouts.map((workout, key) => (
            <Image key={key}>
              <Link to={`/details/` + workout.id}>
                <img src={workoutImage()} alt="" />
              </Link>
            </Image>
          ))}
      </Content>
    </Container>
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

export default WorkoutsDiary;
