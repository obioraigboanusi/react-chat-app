import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChatItem from "../ChatItem";

function ChatList() {
  const chats = useSelector((state) => state.chats);
  return (
    <div>
      <StyledList>
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatItem {...chat} />
          </li>
        ))}
      </StyledList>
    </div>
  );
}
const StyledList = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1rem;
  }
`;
export default ChatList;
