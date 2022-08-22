import { GiSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";
import { NavTag, AppsListContainer, AppListItems } from "./styledComponents";
import styled from "styled-components";

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <NavTag>
        <HeaderLogo>
          <h1>Spoonacular</h1>
          <GiSpoon size={32} />
        </HeaderLogo>

        <AppsListContainer>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <AppListItems>Popular Recipes</AppListItems>
          </Link>
          <Link
            to="/GetRecipes"
            style={{ textDecoration: "none", color: "black" }}
          >
            <AppListItems>Get Recipes</AppListItems>
          </Link>
          <Link
            to="/mealPlan"
            style={{ textDecoration: "none", color: "black" }}
          >
            <AppListItems>Calorie Recipe</AppListItems>
          </Link>
          <Link
            to="/MealPlanCode"
            style={{ textDecoration: "none", color: "black" }}
          >
            <AppListItems>Meal Planner</AppListItems>
          </Link>
        </AppsListContainer>
      </NavTag>
    </>
  );
};

export default Header;
