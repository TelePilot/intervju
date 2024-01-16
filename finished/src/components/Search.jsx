import { useMemo, useState } from "react";
import useUsers from "../hooks/useUsers";

const Search = () => {
  const [input, setInput] = useState("");
  const users = useUsers();
  const filteredUsers = useMemo(() => {
    return users.filter((i) => i.toUpperCase().includes(input.toUpperCase()));
  }, [input, users]);

  return (
    <div>
      <h3>search users:</h3>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {filteredUsers.length
        ? filteredUsers.map((user) => <p key={user}>{user}</p>)
        : null}
    </div>
  );
};

export default Search;
