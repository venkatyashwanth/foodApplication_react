import { useParams } from "react-router-dom";
import { useState } from "react";
import { AddMealContainer, InputBox, SelectBox } from "./StyledComponents";

const FormAddingMeal = () => {
  const params = useParams();

  const createMealPlan = (foodInfo) => {
    const details = {
      date: foodInfo.date,
      slot: foodInfo.slot,
      position: 0,
      type: "RECIPE",
      value: {
        id: 296213,
        servings: foodInfo.serving,
        title: foodInfo.title,
        imageType: "jpg",
      },
    };
    console.log(details);
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === params.username);
    const userName = arr[0].username;
    const hash = arr[0].hash;

    const url = `https://api.spoonacular.com/mealplanner/${userName}/items?apiKey=${process.env.REACT_APP_API_KEY}&hash=${hash}`;

    const options = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [foodInfo, setFoodInfo] = useState({
    date: "",
    slot: "",
    title: "",
    serving: "",
  });

  const handleInfo = (event) => {
    let { name, value } = event.target;
    if (name === "date") {
      let datum = Date.parse(value);
      value = datum / 1000;
    }
    setFoodInfo({ ...foodInfo, [name]: value });
  };

  const handleData = (event) => {
    event.preventDefault();
    createMealPlan(foodInfo);
    alert("Added to schedule");
  };

  return (
    <>
      <form onSubmit={handleData}>
        <AddMealContainer>
          <h2>Add Your Meal Plan</h2>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="dateInput">Enter Date: </label>
            <InputBox type="date" name="date" onChange={handleInfo} />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="slot">Choose a slot:</label>
            <SelectBox
              name="slot"
              id="slot"
              onChange={handleInfo}
              style={{ width: "100%" }}
            >
              <option value="" name="slot">
                -
              </option>
              <option value="1" name="slot">
                BreakFast
              </option>
              <option value="2" name="slot">
                Lunch
              </option>
              <option value="3" name="slot">
                Dinner
              </option>
            </SelectBox>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="title">Recipe title: </label>
            <InputBox
              type="text"
              id="title"
              name="title"
              onChange={handleInfo}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="servings">No.of Servings: </label>
            <InputBox
              type="number"
              id="servings"
              name="serving"
              onChange={handleInfo}
            />
          </div>
          <InputBox type="submit" value="Add Meal" />
        </AddMealContainer>
      </form>
    </>
  );
};

export default FormAddingMeal;
