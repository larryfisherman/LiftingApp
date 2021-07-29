import React, { useEffect, useState } from "react";
import styled from "styled-components";
import workoutImageDraw from "../utility/workoutImage";
import Exercise from "./Exercise";
import useParams from "react-router";
import axios from "axios";

function WorkoutDetails() {
  console.log(workoutImageDraw());
  // const { id } = useParams();
  // const [details, setDetails] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://localhost:5001/api/account/${localStorage.userId}/workout/1/exercise`
  //     )
  //     .then((res) => {
  //       res.data.map((doc) => {
  //         if (doc.id == id) {
  //           setDetails(doc);
  //         }
  //       });
  //     });
  //   console.log(details);
  // }, [id]);

  return (
    <Container>
      <Background>
        <img src={workoutImageDraw()} alt="" />{" "}
      </Background>
      <Content>
        <Exercise />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 900px 160px;
  background-color: #ffffff;
`;

const Title = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
      background-image: cover;
    }
  }
`;

export default WorkoutDetails;
