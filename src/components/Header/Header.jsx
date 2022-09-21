import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { signOut } from "../../application/auth/authSlice";

function Header() {
  const { username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <StyledHeader>
      <div>
        <h1>React Chat App</h1>
        <div className="user">
          <span>
            <FaUserAlt /> {username}{" "}
          </span>{" "}
          | <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 10px 20px;
  background-color: #6a1afe;
  text-align: center;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
  }
  button {
    /* padding: 5px;
    border-radius: 5px; */
    border: none;
    background-color: transparent;
    color: #eee;
    margin-left: 3px;
  }
  span {
    font-weight: 600;
    font-size: 1rem;
  }
  div.user {
    border: 1px solid #c7c7c7;
    padding: 2px 4px;
    border-radius: 2px;
  }
`;
export default Header;
