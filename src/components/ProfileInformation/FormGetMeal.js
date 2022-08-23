import { useParams } from "react-router-dom";
import { useState } from "react";
import MealCard from "../MealCard";
import { InputBox, AddMealContainer, MealContainer } from "./StyledComponents";

const FormGetMeal = () => {
  const params = useParams();

  // Displaying the User Data Got From API

  const [userData, setUserData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getMealPlanForUser = (infoDate) => {
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === params.username);
    const userName = arr[0].username;
    const hash = arr[0].hash;

    const url = `https://api.spoonacular.com/mealplanner/${userName}/day/${infoDate.schDate}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.items);
        data.status === "failure" ? setErrorMsg(data.message) : setErrorMsg("");
      })
      .catch((e) => console.log(e));
  };

  //   const navigateToProfiles = () => {
  //     navigate("/ProfilePage");
  //   };

  const [infoDate, setInfoDate] = useState({
    schDate: "",
  });

  const getScheduledDate = (event) => {
    let { name, value } = event.target;
    setInfoDate({ ...infoDate, [name]: value });
  };

  const handleDateInfo = (event) => {
    event.preventDefault();
    getMealPlanForUser(infoDate);
  };

  return (
    <>
      <AddMealContainer>
        {/* Form for  getting user specific info */}
        <form onSubmit={handleDateInfo}>
          <h2>Get Meal Plan Per Day</h2>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="getDate">Enter Scheduled Date: </label>
            <InputBox
              type="date"
              id="getDate"
              name="schDate"
              onChange={getScheduledDate}
            />
          </div>
          <InputBox type="submit" value="Get Data" />
        </form>
        <MealContainer>
          {userData &&
            userData.map((data) => (
              <MealCard
                key={data.id}
                mealData={data}
                username={params.username}
                updateMeals = {getMealPlanForUser}
                date = {infoDate.schDate}
              />
            ))}
          {errorMsg && <p>{errorMsg}</p>}
        </MealContainer>
      </AddMealContainer>
    </>
  );
};

export default FormGetMeal;
