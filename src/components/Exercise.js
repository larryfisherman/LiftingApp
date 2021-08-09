import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router";

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
  }, [details]);

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

const Sets = styled.div`
  margin: 10px;
`;

const Amount = styled.div`
  margin: 10px;
`;

const Title = styled.div`
  margin: 10px;
`;

const SingleExercise = styled.li`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 80px 100px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  font-size: 24px;
`;

const Container = styled.div``;
const Content = styled.div``;

export default Exercise;
