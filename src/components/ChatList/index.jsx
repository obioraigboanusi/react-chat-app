import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useScrollChat from "../../utils/Hooks/useScrollChat";
import ChatItem from "../ChatItem";

function ChatList() {
  const chats = useSelector((state) => state.chats);
  const ref = useScrollChat(chats.length);

  return (
    <div>
      <StyledList ref={ref}>
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
  max-height: calc(100vh - 72px);
  overflow-y: auto;
  li {
    margin-bottom: 5px;
  }
`;
export default ChatList;
