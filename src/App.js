import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Homepage/Page";
import Cuisine from "./components/Homepage/Cuisine";
import Searched from "./components/Homepage/Searched";
import Recipe from "./components/Homepage/Recipe";
import Header from "./components/Header";
import GetRecipes from "./components/GetRecipes";
import GetIndividualRecipe from "./components/GetIndividualRecipe";
import MealPlanner from "./components/MealPlanner";
import MealPlanCode from "./components/MealPlanCode";
import ProfilesPage from "./components/ProfilesPage";
import RegisterPage from "./components/RegisterPage";
import ProfileLog from "./components/ProfileLog";
import ProfileInformation from "./components/ProfileInformation";
import FormAddingMeal from "./components/ProfileInformation/FormAddingMeal";
import FormGetMeal from "./components/ProfileInformation/FormGetMeal";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Page />} />
          <Route path="/cuisine/:type" exact element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/GetRecipes" exact element={<GetRecipes />} />
          <Route
            path="/GetIndividualRecipe"
            exact
            element={<GetIndividualRecipe />}
          />
          <Route path="/mealPlan" element={<MealPlanner />} />
          <Route path="/MealPlanCode" exact element={<MealPlanCode />} />
          <Route path="/ProfilePage" exact element={<ProfilesPage />} />
          <Route
            path="/registerProfile"
            exact
            element={<RegisterPage />}
          ></Route>
          <Route
            path="/profileLog/:username"
            exact
            element={<ProfileLog />}
          ></Route>
          <Route
            path="/profileInformation/:username"
            exact
            element={<ProfileInformation />}
          >
            <Route path="addmealitem" element={<FormAddingMeal />}></Route>
            <Route path="getmealitem" element={<FormGetMeal />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
