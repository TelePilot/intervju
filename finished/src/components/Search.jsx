import { useMemo, useState } from "react";
import useUsers from "../hooks/useUsers";

const Search = () => {
  const [input, setInput] = useState("");
  //Custom hook just a nicety that I like, functionality can be moved here since
  //we only use it in one place.
  const users = useUsers();

  const filteredUsers = useMemo(() => {
    //toUpper/toLower is usually a thing I forget and users expect it.
    //Can be quickly caught by testing the search input.
    //Filtering and fetching users should be seperated and not filtering through requests.
    return users.filter((i) => i.toUpperCase().includes(input.toUpperCase()));
  }, [input, users]);

  return (
    <div>
      <h3>search users:</h3>
      {/* common pattern is a separate handle change function and that works great as well. */}
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {/* common pattern is f.length && <Component/> if no length exist it'll show the number 0 
      instead of nothing, not what we want! Can also be solved with !! on the f.length */}
      {filteredUsers.length
        ? filteredUsers.map((user) => <p key={user}>{user}</p>)
        : null}
    </div>
  );
};

export default Search;
