import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetRecipes from "./components/GetRecipes";
import GetIndividualRecipe from "./components/GetIndividualRecipe";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<GetRecipes />} />
          <Route path="/GetIndividualRecipe" exact element={<GetIndividualRecipe/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
