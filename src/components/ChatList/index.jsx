import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useScrollChat from "../../utils/Hooks/useScrollChat";
import ChatItem from "../ChatItem";

function ChatList() {
  const { chats, auth } = useSelector((state) => state);
  const ref = useScrollChat(chats.length);

  return (
    <div>
      <StyledList ref={ref}>
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatItem
              {...{ ...chat, isAuthor: chat.author === auth.username }}
            />
          </li>
        ))}
      </StyledList>
    </div>
  );
}
const StyledList = styled.ul`
  list-style: none;
  max-height: calc(100vh - 72px - 89px);
  overflow-y: auto;
  li {
    margin-bottom: 5px;
  }
`;
export default ChatList;
