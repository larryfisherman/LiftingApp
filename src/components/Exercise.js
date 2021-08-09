import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router";
import workoutImageDraw from "../utility/workoutImage";

function Exercise() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://localhost:5001/api/account/${localStorage.userId}/workout/${id}/exercise`
      )
      .then((res) => {
        res.data.map(() => {
          setDetails(res.data);
        });
      });
    console.log(details);
  }, []);

  console.log(details);

  return (
    <Container>
      <Content>
        {details.map((exercise) => (
          <SingleExercise>
            <Title key={exercise.exerciseName}>
              Title: {exercise.exerciseName}
            </Title>
            <Sets key={exercise.sets}>Sets: {exercise.sets}</Sets>
            <Amount key={exercise.amount}>Amount: {exercise.amount}</Amount>
          </SingleExercise>
        ))}
      </Content>
    </Container>
  );
}

const Sets = styled.div``;

const Amount = styled.div``;

const Background = styled.img`
  z-index: -1;
`;

const SingleExercise = styled.li`
  margin: 20px;
  background-color: lightgray;
  padding: 100px 300px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
`;
const Title = styled.div``;
const Container = styled.div``;
const Content = styled.div``;

export default Exercise;
