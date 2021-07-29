import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function RecipeDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    axios.get("https://localhost:5001/api/recipes/").then((res) =>
      res.data.map((doc) => {
        if (doc.id == id) {
          setDetails(doc);
        }
      })
    );
    console.log(details);
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={details.recipePhoto} alt="" />
      </Background>
      <Content>
        <Macro>
          <Proteins>P: {details?.proteins}</Proteins>
          <Carbo>C: {details?.carbo}</Carbo>
          <Fat>F: {details?.fat}</Fat>
          <Calories>{details?.calories} kcal</Calories>
        </Macro>
        <Name>{details.name}</Name>
        <Description>{details.description}</Description>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  top: 0;
  background-color: rgb(0, 0, 0, 0.72);
`;

const Macro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Content = styled.div`
  max-width: 874px;
  margin: 0px 0px 0px 30px;
`;

const Name = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  font-size: 25px;
  line-height: 30px;
  padding: 32px 0px;
  @media (max-width: 768px) {
    font-size: 18px;
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

const Proteins = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  font-size: 10px;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const Fat = styled(Proteins)``;
const Carbo = styled(Proteins)``;
const Calories = styled(Proteins)``;
export default RecipeDetails;
