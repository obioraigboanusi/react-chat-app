import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useChannelContext } from "../../application/channelContext";

function ChatForm() {
  const [message, setMessage] = useState("");
  const { postChat } = useChannelContext();
  const { username } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const chat = {
        message,
        author: username,
        id: uuidv4(),
        createdAt: moment().format(),
      };
      postChat(chat);
      setMessage("");
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
          <button type="submit" disabled={!message}>
            Send
          </button>
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
    &:disabled {
      background-color: lightgray;
      color: white;
      cursor: not-allowed;
    }
  }
`;

export default ChatForm;
