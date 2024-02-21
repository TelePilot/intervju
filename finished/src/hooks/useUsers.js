import { useEffect, useState } from "react";
import { fetchUserData } from "../utils/api";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const u = await fetchUserData("");
      const userNames = u.map((i) => i.name);
      setUsers(userNames);
    };
    getUsers();
  }, []);
  return users;
};
export default useUsers;
