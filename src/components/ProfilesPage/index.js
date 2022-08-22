import { useNavigate } from "react-router-dom";
import ProfileCards from "../ProfileCards";
import { ProfileDiv, ProfileContainer, ButtonElement } from "./StyledComponents";

const ProfilesPage = () => {
  const navigate = useNavigate();
  let localData = (() => {
    const localValue = localStorage.getItem("profileData");
    return localValue === null ? [] : JSON.parse(localValue);
  })();

  const renderProfileInfo = () => {
    return (
      <>
        {localData === [] ? (
          ""
        ) : (
          <ProfileDiv>
            {localData.map((data) => (
              <ProfileCards key={data.user} data={data} />
            ))}
          </ProfileDiv>
        )}
      </>
    );
  };

  const navigateToCreateProfile = () => {
    navigate("/registerProfile");
  };

  return (
    <>
      <ProfileContainer>
        <h1>All profiles</h1>
        <ButtonElement onClick={navigateToCreateProfile}>Add New Profile</ButtonElement>
        {renderProfileInfo()}
      </ProfileContainer>
    </>
  );
};

export default ProfilesPage;
