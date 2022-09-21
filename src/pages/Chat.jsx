import React from "react";
import styled from "styled-components";
import ChatForm from "../components/ChatForm";
import ChatList from "../components/ChatList";
import Header from "../components/Header/Header";
import withAuth from "../utils/HOC/withAuth";

function Chat() {
  return (
    <ChatContainer>
      <Header />
      <ChatList />
      <ChatForm />
    </ChatContainer>
  );
}
export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin-inline: auto;
`;

const ChatContainer = styled(Container)`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  & > div:first-of-type {
    flex-grow: 1;
  }
`;
export default withAuth(Chat);
