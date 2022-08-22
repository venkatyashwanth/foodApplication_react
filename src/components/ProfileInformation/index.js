import { useParams} from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import {
  ProfileInfoCard,
  SideWindow,
  LinkList
} from "./StyledComponents";

const ProfileInformation = () => {
  const params = useParams();

  const username =
    params.username.charAt(0).toUpperCase() + params.username.slice(1);

  return (
    <>
      <ProfileInfoCard>
        {/* <button onClick={navigateToProfiles}>Profiles</button>
        <button onClick={getStoredData}>Development</button> */}
        <SideWindow>
          <h2>Welcome {username}...</h2>
          <LinkList>
            <li>
              <Link to="addmealitem" style={{textDecoration: "none", color: 'black'}}>Add Meal Item</Link>
            </li>
            <li>
              <Link to="getmealitem" style={{textDecoration: "none", color: 'black'}}>Get Meal Item</Link>
            </li>
            <li>
              <Link to="/ProfilePage" style={{textDecoration: "none", color: 'red'}}>Profiles Page</Link>
            </li>
          </LinkList>
        </SideWindow>
        <div>
          <Outlet />
        </div>

        
      </ProfileInfoCard>
    </>
  );
};

export default ProfileInformation;
