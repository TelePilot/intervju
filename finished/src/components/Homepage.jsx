import { useContext } from "react";
import Search from "./Search";
import { UserContext } from "../App";

const Homepage = () => {
  const { user, bonus } = useContext(UserContext);
  return (
    <div>
      {/* context if there is time. otherwise useUser hook or the hook contents in this component. */}
      <h2>Welcome back {user.name}!</h2>
      <p>{bonus}</p>
      <Search />
    </div>
  );
};

export default Homepage;
