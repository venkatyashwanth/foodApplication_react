import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GetIndividualRecipe = () => {
  const [data,setData] = useState([]);

  const fetchFullRecipe = async (id, APP_KEY) => {
    let recipeData = JSON.parse(localStorage.getItem("recipeFullData"))
    console.log(recipeData === null);
    if(recipeData === null){
      const response = await Axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APP_KEY}`
      );
      
      localStorage.setItem("recipeFullData", JSON.stringify(response.data));
    }

    recipeData = JSON.parse(localStorage.getItem("recipeFullData"))
    setData(recipeData)
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('recipeId'));
    const APP_KEY = JSON.parse(localStorage.getItem('appKey'));
    fetchFullRecipe(id,APP_KEY)
  },[])

  return (
    <>
      <h1>This is a single item</h1>
      <p>{data.summary}</p>
      <button>
        <Link to="/">
          Back
        </Link>
      </button>
    </>
  );
};

export default GetIndividualRecipe;
