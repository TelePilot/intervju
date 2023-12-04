import { useEffect, useState } from "react";
import { fetchUserData } from "../utils/api";

const useUser = (id) => {
  const [user, setUser] = useState({ name: "" });
  useEffect(() => {
    const f = async () => {
      const u = await fetchUserData(id);
      setUser(u);
    };
    f();
  }, [id]);
  return user;
};
export default useUser;
