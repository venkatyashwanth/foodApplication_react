import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RecipeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  padding: 20px;
  color: white;
`;
const HeroImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  align-self: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const RecipeSection = styled.div`
  padding: 20px;
  margin: 0px 30px;
`;

const TextStyle = styled.p`
  font-size: 18px;
  line-height: 30px;
`;

const IngredientImg = styled.img`
  width: 40px;
  height: 40px;
`
const GetBackButton = styled.button`
  font-size: 20px;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: black;
`


const GetIndividualRecipe = () => {
  const [data, setData] = useState([]);

  const fetchFullRecipe = async (id, APP_KEY) => {
    let recipeData = JSON.parse(localStorage.getItem("recipeFullData"));
    console.log(recipeData === null);
    if (recipeData === null) {
      const response = await Axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APP_KEY}`
      );

      localStorage.setItem("recipeFullData", JSON.stringify(response.data));
    }

    recipeData = JSON.parse(localStorage.getItem("recipeFullData"));
    console.log(recipeData);
    setData(recipeData);
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("recipeId"));
    const APP_KEY = JSON.parse(localStorage.getItem("appKey"));
    fetchFullRecipe(id, APP_KEY);
  }, []);

  const vegImg = () => <IngredientImg src="https://icon2.cleanpng.com/20180601/ae/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c2357677b7.0724399215278904854853.jpg" alt="veg" />
    
  const nonVegImg = () =><IngredientImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png" alt="non veg" />
    


  return (
    <>
      <RecipeHeader>
        <h1>{data.title}</h1>
        <HeroImg src={data.image} alt="heroImg" />
      </RecipeHeader>
      <RecipeSection>
        <div>
          <TextStyle>
            Instructions: <br />
            {data.instructions}
          </TextStyle>
        </div>
        <div>
          <TextStyle>
            Read In Minutes: {data.readyInMinutes}
          </TextStyle>
          <TextStyle>
            Price Per Serving: {data.pricePerServing}$
          </TextStyle>
          <TextStyle>
            Likes: {data.aggregateLikes}
          </TextStyle>
        </div>
        <div>
          {data.vegetarian? vegImg()
          :nonVegImg()}
        </div>

        <GetBackButton>
          <Link to="/" style={{textDecoration: 'none', color: "black"}}> Go Back</Link>
        </GetBackButton>
      </RecipeSection>
    </>
  );
};

export default GetIndividualRecipe;
