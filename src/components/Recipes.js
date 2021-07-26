import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectRecipes } from "../store/recipesSlice";
import { Link } from "react-router-dom";
import AddRecipeModal from "./AddRecipeModal";
import axios from "axios";
import { setRecipes } from "../store/recipesSlice";

function Recipes() {
  const showRecipes = useSelector(selectRecipes);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  let recipes = [];

  useEffect(() => {
    axios.get("https://localhost:5001/api/recipes").then((response) => {
      response.data.map((doc) => {
        recipes = [
          ...recipes,
          {
            id: doc.id,
            ...doc,
          },
        ];
        dispatch(
          setRecipes({
            recipes,
          })
        );
      });
    });
  }, [dispatch]);

  return (
    <>
      <Buttons>
        <AddRecipe onClick={() => setShowModal(true)}>
          Add your recipe!
        </AddRecipe>
      </Buttons>
      <Container>
        <Content>
          {showRecipes &&
            showRecipes.map((recipe, key) => (
              <Image key={key}>
                <Link to={`/details/` + recipe.id}>
                  <img src={recipe.recipePhoto} alt="" />
                </Link>
              </Image>
            ))}
        </Content>
      </Container>
      {showModal && <AddRecipeModal closeModal={setShowModal} />}
    </>
  );
}

const AddRecipe = styled.button`
  padding: 15px 20px;
  border-radius: 3px solid black;
`;

const Buttons = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

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

export default Recipes;
