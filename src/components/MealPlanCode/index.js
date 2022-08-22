import { useNavigate } from "react-router-dom";

import { MealContainerStyle, ButtonElement } from "./StyledComponents";

const MealPlanCode = () => {
  let navigate = useNavigate();
  const navigateToProfilesPage = () => {
    navigate("/ProfilePage");
  };

  const navigateToCreateProfilePage = () => {
    navigate("/registerProfile");
  };
  return (
    <MealContainerStyle>
      <h1>Do you have your profile?</h1>
      <div>
        <ButtonElement onClick={navigateToProfilesPage}>YES</ButtonElement>
        <ButtonElement onClick={navigateToCreateProfilePage}>NO</ButtonElement>
      </div>
    </MealContainerStyle>
  );
};

export default MealPlanCode;
