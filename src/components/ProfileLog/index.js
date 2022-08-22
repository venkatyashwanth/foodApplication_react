import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileForm, FormContainer, InputBox, ButtonElement } from "./StyledComponents";

const ProfileLog = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (event) => {
    let { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const verifyCredentials = (event) => {
    event.preventDefault();
    const localInfo = JSON.parse(localStorage.getItem("profileData"));
    const arr = localInfo.filter((info) => info.user === params.username);

    if (
      arr[0].email === credentials.email &&
      arr[0].password === credentials.password
    ) {
      navigate(`/profileInformation/${params.username}`);
    } else {
      alert("Enter proper credentials");
    }
  };

  const navigateToProfiles = () => {
    navigate("/ProfilePage");
  };

  return (
    <>
      <ProfileForm>
        <form onSubmit={verifyCredentials}>
          <h1 style={{ textAlign: "center" }}>Hi {params.username}</h1>
          <p style={{ textAlign: "center" }}>Please Enter Your Credentials</p>
          <FormContainer>
            <div>
              <label htmlFor="emailItem">Your Email: </label>
              <InputBox
                type="email"
                id="emailItem"
                name="email"
                onChange={handleCredentials}
              />
            </div>
            <div>
              <label htmlFor="passwordItem">Your Password: </label>
              <InputBox
                type="password"
                id="passwordItem"
                name="password"
                onChange={handleCredentials}
              />
            </div>
            <InputBox type="submit" value="Verify" />
          </FormContainer>
        </form>
        <ButtonElement onClick={navigateToProfiles}>Go To Profiles</ButtonElement>
      </ProfileForm>
    </>
  );
};

export default ProfileLog;
