import styled from "styled-components";
import Axios from "axios";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import {
  Header,
  AppNameComponent,
  SearchComponent,
  SearchInput,
  SearchStyleIcon,
  CaloriesContainer,
  RecipeHeroContainer,
  RecipeHeroText,
  RecipeHeroImage,
} from "./styledComponents";

import CaloriesRecipe from "./CaloriesRecipe";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const APP_KEY = "b8f9724f087f4e33bb2aa2bc33321c04";

const initialImage = () => {
  return (
    <>
      <RecipeHeroContainer>
        <RecipeHeroText>
          Get Recipes Based On Your Calorie Intake
        </RecipeHeroText>
        <RecipeHeroImage src="https://julienquaglierinic8e0c9.zapwp.com/q:i/r:1/wp:1/w:412/u:https://julienquaglierini.com/wp-content/uploads/2019/08/calcul-calories.png" />
      </RecipeHeroContainer>
    </>
  );
};

const MealPlanner = () => {
  const [searchString, setSearchString] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const getSearchValue = (event) => {
    setSearchString(event.target.value);
  };

  const getByEnter = (event) => {
    if (event.key === "Enter") {
      fetchRecipe(searchString);
      setSearchString("");
    }
  };

  const handleSearch = () => {
    fetchRecipe(searchString);
    setSearchString("");
  };

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${searchString}&apiKey=${APP_KEY}`
    );
    if (response.data.length === 0) {
      alert("Recipe Not Found with given input");
    }
    // console.log(response.data);
    setRecipeList(response.data.meals);
    setNutrients(response.data.nutrients);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <GiHamburger size={36} style={{ margin: "15px" }} />
          Calorie Diet
        </AppNameComponent>

        <SearchComponent>
          <SearchInput
            type="number"
            placeholder="Enter Number Of Calories"
            value={searchString}
            onChange={getSearchValue}
            onKeyDown={getByEnter}
          />
          <AiOutlineSearch style={SearchStyleIcon} onClick={handleSearch} />
        </SearchComponent>
      </Header>

      <CaloriesContainer>
        {recipeList.length === 0
          ? initialImage()
          : recipeList.map((recipeObj) => (
              <CaloriesRecipe
                recipeObj={recipeObj}
                key={recipeObj.id}
                APP_KEY={APP_KEY}
              />
            ))}
      </CaloriesContainer>
      <div>
        {nutrients.length !== 0 
        && 
        <ul>
            Nutrients: 
            <li>Total Calories: {nutrients.calories}</li>
            <li>Carbs: {nutrients.carbohydrates}</li>
            <li>Fat: {nutrients.fat}</li>
            <li>Protein: {nutrients.protein}</li>
        </ul>
        }
      </div>
    </Container>
  );
};

export default MealPlanner;
