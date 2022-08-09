import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Homepage/Page";
import Cuisine from "./components/Homepage/Cuisine";
import Searched from "./components/Homepage/Searched";
import Recipe from "./components/Homepage/Recipe";
import Header from "./components/Header";
import GetRecipes from "./components/GetRecipes";
import GetIndividualRecipe from "./components/GetIndividualRecipe";
import MealPlanner from "./components/MealPlanner";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Page />} />
          <Route path="/cuisine/:type" exact element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
          <Route path="/GetRecipes" exact element={<GetRecipes />} />
          <Route path="/GetIndividualRecipe" exact element={<GetIndividualRecipe/>} />
          <Route path="/mealPlan" element={<MealPlanner/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
