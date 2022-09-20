import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addNewChat } from "../../application/chat/chatSlice";

function ChatForm() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const chat = {
        id: Date.now(),
        message: " Lorem ipsum dolor sit amet.",
        isAuthor: false,
        author: "Obiora",
      };
      dispatch(
        addNewChat({
          chat,
        })
      );
    }
  };
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="message"
            placeholder="Type message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
