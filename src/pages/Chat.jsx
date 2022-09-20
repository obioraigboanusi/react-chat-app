import React from "react";
import styled from "styled-components";
import ChatForm from "../components/ChatForm";
import ChatList from "../components/ChatList";

function Chat() {
  return (
    <ChatContainer>
      <ChatList />
      <ChatForm />
    </ChatContainer>
  );
}
const ChatContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-inline: auto;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    flex-grow: 1;
  }
`;
export default Chat;
