import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GetRecipes from "./components/GetRecipes";
import GetIndividualRecipe from "./components/GetIndividualRecipe";
import MealPlanner from "./components/MealPlanner";
import NotFound from "./components/NotFound";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<GetRecipes />} />
          <Route path="/GetIndividualRecipe" exact element={<GetIndividualRecipe/>} />
          <Route path="/mealPlan" element={<MealPlanner/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
