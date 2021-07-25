import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function AddRecipeModal({ closeModal }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeProteins, setRecipeProteins] = useState("");
  const [recipeCarbo, setRecipeCarbo] = useState("");
  const [recipeFat, setRecipeFat] = useState("");
  const [recipeCalories, setRecipeCalories] = useState("");
  const [recipePhoto, setRecipePhoto] = useState("");

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
            <h1>Share with your recipe!</h1>
          </Title>
          <Form>
            <RecipeName
              placeholder="Name"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            ></RecipeName>
            <RecipeDescription
              placeholder="Description"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
            ></RecipeDescription>
            <RecipeProteins
              placeholder="Proteins"
              value={recipeProteins}
              onChange={(e) => setRecipeProteins(e.target.value)}
            ></RecipeProteins>
            <RecipeCarbo
              placeholder="Carbo"
              value={recipeCarbo}
              onChange={(e) => setRecipeCarbo(e.target.value)}
            ></RecipeCarbo>
            <RecipeFat
              placeholder="Fat "
              value={recipeFat}
              onChange={(e) => setRecipeFat(e.target.value)}
            ></RecipeFat>
            <RecipeCalories
              placeholder="Calories"
              value={recipeCalories}
              onChange={(e) => setRecipeCalories(e.target.value)}
            ></RecipeCalories>
            <RecipePhoto
              placeholder="Photo of recipe"
              onChange={(e) => setRecipePhoto(e.target.value)}
              value={recipePhoto}
            ></RecipePhoto>
            <ContinueButton
              onClick={(e) => {
                axios
                  .post("https://localhost:5001/api/recipes", {
                    Name: recipeName,
                    description: recipeDescription,
                    proteins: recipeProteins,
                    carbo: recipeCarbo,
                    fat: recipeFat,
                    calories: recipeCalories,
                    recipePhoto: recipePhoto,
                  })
                  .then(closeModal(false));
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

const RecipeName = styled.input`
  margin: 3px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid black;
  border-radius: 2px;
`;

const RecipeDescription = styled(RecipeName)``;
const RecipeProteins = styled(RecipeName)``;
const RecipeCarbo = styled(RecipeName)``;
const RecipeFat = styled(RecipeName)``;
const RecipeCalories = styled(RecipeName)``;
const RecipePhoto = styled(RecipeName)``;

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
const Title = styled.div`
  display: inline-block;
  margin-top: 10px;
`;

const ContinueButton = styled.button`
  margin-top: 20px;
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

export default AddRecipeModal;
