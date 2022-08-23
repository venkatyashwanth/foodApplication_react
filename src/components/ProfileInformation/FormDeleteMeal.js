import { useState } from "react";
import { useParams } from "react-router-dom";
import { AddMealContainer, InputBox } from "./StyledComponents";

const FormDeleteMeal = () => {
  const params = useParams();
  const [message, setMessage] = useState('');
  const deleteMeal = (delDate) => {
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === params.username);
    const userName = arr[0].username;
    const hash = arr[0].hash;

    const url = `https://api.spoonacular.com/mealplanner/${userName}/day/${delDate}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMessage(data.status))
      .catch((e) => console.log(e));

      alert(`Meal plan removed for ${delDate}`);
  };

  

  const [delDate, setDelDate] = useState({
    deleteDate: "",
  });

  const getDeletedDate = (event) => {
    let { name, value } = event.target;
    setDelDate({ ...delDate, [name]: value });
  };

  const submitDeleteDate = (event) => {
    event.preventDefault();
    deleteMeal(delDate.deleteDate);
    
  };

  return (
    <AddMealContainer>
      <form onSubmit={submitDeleteDate}>
        <h2>Delete Meal For Specific Day</h2>
        <div style={{display: "flex", flexDirection: "column"}}>
          <label htmlFor="getDate">Enter Date: </label>
          <InputBox type="date" id="getDate" name="deleteDate" onChange={getDeletedDate}/>
        </div>
        <InputBox type="submit" value="Clear Data" />
      </form>
      <p style={{color: 'green'}}>{message === ''? '':'success'}</p>
    </AddMealContainer>
  );
};

export default FormDeleteMeal;
