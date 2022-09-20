import React from "react";
import styled from "styled-components";

function ChatForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="message" 
          placeholder="Type message"
          id="message" />
          <button type="submit">Send</button>
        </div>
      </form>
    </StyledForm>
  );
}
const StyledForm = styled.div`
  background-color: #6a1afe;
  padding: 1rem;
  width: 100%;

  div {
    display: flex;
  }
  input {
    height: 40px;
    padding-inline: 20px;
    flex-grow: 1;
    border-radius: 20px;
    border: none;
    margin-right: 1rem;
  }
  button {
    height: 40px;
    padding-inline: 20px;
    border-radius: 20px;
    border: none;
  }
`;
export default ChatForm;
