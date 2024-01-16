import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../App";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px;
  border-bottom: 1px solid white;
  & img {
    width: 40px;
    object-fit: contain;
  }
`;

const Navbar = () => {
  const { user, setBonus, bonus } = useContext(UserContext);

  return (
    <Nav>
      <img alt="avatar of a cat" src="https://robohash.org/blixt?set=set4" />
      <div>
        <p>{user.name}</p>
        <button onClick={() => setBonus(bonus ? "" : "nice")}>bonus</button>
      </div>
    </Nav>
  );
};

export default Navbar;
