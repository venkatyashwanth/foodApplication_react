import "./index.css";
import Veggie from "./Veggie";
import Popular from "./Popular";
import Categories from "./Categories";
import Search from "./Search";

const Home = () => {
  return (
    <div className="homePages">
      <Search />
      <Categories />
      <Veggie />
        <Popular />
    </div>
  );
};

export default Home;
