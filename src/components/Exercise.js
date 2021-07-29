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
  }, []);

  return (
    <Container>
      <Content>
        <Title>{details.map((exercise) => exercise.exerciseName)}</Title>
      </Content>
    </Container>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Container = styled.div``;
const Content = styled.div``;

export default Exercise;
