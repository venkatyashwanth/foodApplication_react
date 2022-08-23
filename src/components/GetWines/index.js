import { Link, Outlet } from "react-router-dom";
import { WineContainer,LinkList } from "./StyledComponents";


const GetWines = () => {
  return (
    <>
      <WineContainer>
        
        <div style={{ display: "flex" }}>
          <div style={{width: "30%", minHeight: '80vh', paddingLeft: "10px", backgroundColor: "#e8e6e6"}}>
            <LinkList>
            <h2>Get Wine Data</h2>
              <li>
                <Link
                  to="drywhitewine"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Dry White Wine
                </Link>
              </li>
              <li>
                <Link
                  to="otherwhitewine"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Other White Wine
                </Link>
              </li>
            </LinkList>
          </div>
          <div style={{width: "100%", paddingLeft: "10px", minHeight: '80vh' }}>
            <Outlet />
          </div>
        </div>
      </WineContainer>
    </>
  );
};

export default GetWines;
