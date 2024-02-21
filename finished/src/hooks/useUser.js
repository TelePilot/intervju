import { useEffect, useState } from "react";
import { fetchUserData } from "../utils/api";

const useUser = (id) => {
  const [user, setUser] = useState({ name: "" });
  useEffect(() => {
    //Async funcs either defined in the useEffect or as a useCallback
    const getUser = async () => {
      const u = await fetchUserData(id);
      setUser(u);
    };
    getUser();
  }, [id]);
  return user;
};
export default useUser;
