import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkouts } from "../store/workoutsSlice";
import { Link } from "react-router-dom";
import { setWorkouts } from "../store/workoutsSlice";
import workoutImageDraw from "../utility/workoutImage";
import axios from "axios";

function WorkoutsDiary() {
  const showWorkouts = useSelector(selectWorkouts);
  const dispatch = useDispatch();

  let workouts = [];

  useEffect(() => {
    axios
      .get(`https://localhost:5001/api/account/${localStorage.userId}/workout`)
      .then((response) => {
        response.data.map((doc) => {
          workouts = [
            ...workouts,
            {
              id: doc.id,
              ...doc,
            },
          ];
          dispatch(
            setWorkouts({
              workouts,
            })
          );
        });
      });
  }, [dispatch]);

  return (
    <Container>
      <Content>
        {showWorkouts &&
          showWorkouts.map((workout, key) => (
            <Image key={key}>
              <Link to={`/exercise/` + workout.id}>
                <img src={workoutImageDraw()} alt="" />
                <Text>
                  <span>{workout.workoutName}</span>
                </Text>
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

const Text = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px 80px;
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
  background-color: rgba(255, 255, 255, 0.15);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -3;
  }
  &:hover {
    transform: scale(1.01);
    transition: all 0.3s ease-out;
    border: 2px solid rgb(255, 255, 255, 1);
  }
`;

export default WorkoutsDiary;
