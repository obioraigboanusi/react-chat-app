import React from "react";
import styled from "styled-components";
import { Container } from "./Chat";

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledSignInContainer>
      <div>
        <header>
          <h2>Chat App</h2>
          <p>Sign in to Continue</p>
        </header>
        <form onSubmit={handleSubmit}>
          <input type="text" name="user-name" placeholder="Username" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </StyledSignInContainer>
  );
}
const StyledSignInContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  max-width: 400px;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  header {
    margin-bottom: 2rem;
  }
  & > div {
    border: 1px solid #eee;
    padding: 30px 20px;
    width: 100%;
  }
  form,
  input,
  button {
    width: 100%;
  }
  input {
    border: 1px solid #eee;
    &:focus {
      outline: none;
      border: 1px solid #919191;
    }
  }
  input,
  button {
    height: 40px;
    margin-bottom: 1rem;
    padding-inline: 1rem;
    border-radius: 4px;
  }
  button {
    background-color: #1e90ff;
    color: white;
    border: none;
    &:hover {
      background-color: #145aa0;
    }
  }
`;
export default SignIn;
