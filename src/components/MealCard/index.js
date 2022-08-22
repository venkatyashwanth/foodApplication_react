import styled from "styled-components";

const MealInfo = styled.div`
  width: 180px;
  min-height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  div{
    text-align: center;
    background-color: gray;
  }
  button{
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;

const MealCard = (props) => {
  const { mealData,username } = props;

  let value = mealData.slot;

  let slot;
  switch (value) {
    case 1:
      slot = "BreakFast";
      break;
    case 2:
      slot = "Lunch";
      break;
    case 3:
      slot = "Dinner";
      break;
    default:
      slot = "some error";
  }

  
  const deleteMeal = () => {
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === username);
    const userName = arr[0].username;
    const hash = arr[0].hash;

    const url = `https://api.spoonacular.com/mealplanner/${userName}/items/${mealData.id}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <MealInfo>
        <div>
            <p>{mealData.position}. {slot}</p>
        </div>
        
        <p>{mealData.value.title}</p>
        <p>Servings: {mealData.value.servings}</p>
        <p>id: {mealData.id}</p>
        <button onClick={deleteMeal}>Delete</button>
      </MealInfo>
    </>
  );
};

export default MealCard;
