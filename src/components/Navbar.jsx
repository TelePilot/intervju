import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../App";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px;

  & img {
    width: 40px;
    object-fit: contain;
  }
`;

const Navbar = () => {
  const { user, setBonus, bonus } = useContext(UserContext);

  return (
    <Nav>
      <img src="https://cdn1.vectorstock.com/i/1000x1000/72/90/female-avatar-profile-icon-round-woman-face-vector-18307290.jpg" />
      <div>
        <p>{user.name}</p>
        <button onClick={() => setBonus(bonus ? "" : "nice")}>bonus</button>
      </div>
    </Nav>
  );
};

export default Navbar;
