import React from "react";
import styled from "styled-components";
import ChatItem from "../ChatItem";

function ChatList({
  chats = [
    {
      id: 1,
      message: " Lorem ipsum dolor sit amet.",
      isAuthor: false,
      author: "Obiora",
    },
    {
      id: 2,
      message: " Lorem ipsum dolor sit amet.",
      isAuthor: false,
      author: "Maureen",
    },
    {
      id: 3,
      message: " Lorem ipsum dolor sit amet.",
      isAuthor: true,
      author: "Chike",
    },
  ],
}) {
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
