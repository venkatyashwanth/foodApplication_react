import { useParams } from "react-router-dom";
import { useState } from "react";
import { InputBox, AddMealContainer, MealContainer } from "./StyledComponents";
import MealCardWeek from "./MealCardWeek";

const GetMealsWeek = () => {
  const params = useParams();
  const [userData, setUserData] = useState([]);
  const [message,setMessage] = useState("");

  const getMealPlanForWeek = (Date) => {
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === params.username);
    const userName = arr[0].username;
    const hash = arr[0].hash;
    console.log(Date)

    const url = `https://api.spoonacular.com/mealplanner/${userName}/week/${Date.startDate}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

    const doNetworkCall = async () => {
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setUserData(jsonData.days)
        if(jsonData.days.length === 0){
            setMessage("No Meal Data For Next 7 days")
        }else{
            setMessage("")
        }
      } catch (error) {
        console.log(error);
      }
    };

    doNetworkCall();
  };

  const [startingDate, setStartingDate] = useState({
    startDate: "",
  });

  const getStartDate = (event) => {
    let { name, value } = event.target;
    setStartingDate({ ...startingDate, [name]: value });
  };

  const handleWeekData = (event) => {
    event.preventDefault();
    getMealPlanForWeek(startingDate);
  };

  return (
    <>
      <AddMealContainer>
        {/* Form for  getting user specific info */}
        <form onSubmit={handleWeekData}>
          <h2>Get Meal Plan Per Week</h2>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="getDate">Enter Scheduled Date: </label>
            <InputBox
              type="date"
              id="getDate"
              name="startDate"
              onChange={getStartDate}
            />
          </div>
          <InputBox type="submit" value="Get Data" />
        </form>
        <MealContainer>
          {userData &&
            userData.map((data) => (
              <MealCardWeek
                key={data.items[0].id}
                mealData={data.items}
                extra = {data}
                username={params.username}
                updatePlan={getMealPlanForWeek}
                starDate = {startingDate}
              />
            ))}
          <p>{message}</p>
        </MealContainer>
      </AddMealContainer>
    </>
  );
};

export default GetMealsWeek;
