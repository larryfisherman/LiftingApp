import { useEffect } from "react";
import styled from "styled-components";
import StartPageSlider from "./StartPageSlider";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import { setRecipes } from "../store/recipesSlice";
import { selectUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
  }, [user?.user]);

  return (
    <Container>
      <HomeHeader />
      <StartPageSlider />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f9f9f9;
  overflow: hidden;
`;

export default Home;
