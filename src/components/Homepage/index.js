import "./index.css";
import Veggie from "./Veggie";
import Popular from "./Popular";
import Categories from "./Categories";
import Search from "./Search";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="homePages">
      <Search />
      <Categories />
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        <Veggie />
        <Popular />
      </motion.div>
    </div>
  );
};

export default Home;
