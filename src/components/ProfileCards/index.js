import { useNavigate } from "react-router-dom";
import {ProfileContainer,ProfileContent} from './StyledComponents'



const ProfileCards = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  const { user } = data;
  const initial = user[0].toUpperCase();
  const username = user.charAt(0).toUpperCase() + user.slice(1);

  const navigateToProfile = () => {
    navigate(`/profileLog/${user}`)
  };

  return (
    <ProfileContainer onClick={navigateToProfile}>
      <ProfileContent>
        <h1>{initial}</h1>
        <p>{username}</p>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileCards;
