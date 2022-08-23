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
  div {
    text-align: center;
  }
  button {
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;

const MealCardWeek = (props) => {
  const { mealData, username, extra, updatePlan, starDate } = props;
  const { date, day } = extra;
  var myDate = new Date( parseInt(date)*1000);
  const convertedDate = myDate.toDateString().slice(4)

  const renderSlot = (slot) => {
    let value = slot;
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
    return (
      <>
        <p>{slot}</p>
      </>
    );
  };

  let backgroundColor;
  let weekDay = day;
  switch (weekDay) {
    case "Monday":
      backgroundColor = "#eb8f34";
      break;
    case "Tuesday":
      backgroundColor = "#dbeb34";
      break;
    case "Wednesday":
      backgroundColor = "#34eb40";
      break;
    case "Thursday":
      backgroundColor = "#34ebe8";
      break;
    case "Friday":
      backgroundColor = "#3440eb";
      break;
    case "Saturday":
      backgroundColor = "#de34eb";
      break;
    case "Sunday":
      backgroundColor = "#eb3458";
      break;
    default:
      backgroundColor = "#eb3458";
  }

  const deleteMeal = (id) => {
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === username);
    const userName = arr[0].username;
    const hash = arr[0].hash;

    alert("confirm delete");
    const url = `https://api.spoonacular.com/mealplanner/${userName}/items/${id}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const doNetworkCall = async () => {
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        console.log(jsonData);
        alert("Product Deleted");
      } catch (error) {
        console.log(error);
      }
      
      updatePlan(starDate)
    };
    doNetworkCall();

    
  };

  return (
    <>
      {mealData.map((mealInfo) => (
        <MealInfo key={mealInfo.id}>
          <div style={{ backgroundColor: backgroundColor }}>
            <p>{day}</p>
          </div>
          {renderSlot(mealInfo.slot)}
          <p>{mealInfo.value.title}</p>
          <p>Servings: {mealInfo.value.servings}</p>
          <p>{convertedDate}</p>
          <button onClick={() => deleteMeal(mealInfo.id)}>Delete</button>
        </MealInfo>
      ))}
    </>
  );
};

export default MealCardWeek;
