import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addDetails from "../config/MyService";
import { FormContainer, InputContainerBox, InputBox, ButtonElement } from "./StyledComponents";

const Signup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    yPassword: "",
  });

  const handleDetails = (event) => {
    let { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const postUserDetails = (event) => {
    event.preventDefault();
    let localData = JSON.parse(localStorage.getItem("profileData"));
    if (localData !== null) {
      function checkUser(data) {
        return data.user === userDetails.username;
      }
      if (localData.some(checkUser)) {
        alert("Profile exist with given username");
        return;
      }
    }
    addDetails(userDetails);
    alert("Profile is created");
    navigate("/ProfilePage");
  };

  const navigateToHome = () => {
    navigate("/ProfilePage");
  };

  return (
    <>
      <FormContainer>
        <h1>Create Your Profile</h1>
        <form onSubmit={postUserDetails}>
          <InputContainerBox>
            <div>
              <label htmlFor="userName">Enter username: </label>
              <InputBox
                type="text"
                id="userName"
                name="username"
                onChange={handleDetails}
                required
              />
            </div>
            <div>
              <label htmlFor="firstName">Enter firstName: </label>
              <InputBox
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleDetails}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Enter lastName: </label>
              <InputBox
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleDetails}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Enter your email:</label>
              <InputBox
                type="email"
                id="email"
                name="email"
                onChange={handleDetails}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Enter your password:</label>
              <InputBox
                type="password"
                id="password"
                name="yPassword"
                onChange={handleDetails}
                required
              />
            </div>
          </InputContainerBox>
          <InputBox type="submit" value="Create Profile" />
        </form>
        <ButtonElement onClick={navigateToHome}>Profile Home</ButtonElement>
      </FormContainer>
    </>
  );
};

export default Signup;
