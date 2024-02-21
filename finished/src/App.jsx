import { createContext, useState } from "react";
import "./App.css";
import styles from "./app.module.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import useUser from "./hooks/useUser";

export const UserContext = createContext({ user: "Loading..." });

function App() {
  //if there is time implementing context could be a bonus.
  const [bonus, setBonus] = useState("");

  //custom hooks is not necessary but could be a question around structure
  const user = useUser(1);
  return (
    <>
      <UserContext.Provider
        value={{ user, bonus, setBonus: (s) => setBonus(s) }}
      >
        <Navbar />
        <h1>Hola :) </h1>
        <div className={styles.card}>
          <Homepage />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
