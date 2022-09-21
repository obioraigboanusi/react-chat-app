import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useScrollChat from "../../utils/Hooks/useScrollChat";
import ChatItem from "../ChatItem";

const chatPerPage = 27;

function ChatList() {
  const { chats, auth } = useSelector((state) => state);
  const [sizeToLoad, setSizeToLoad] = useState(chatPerPage);
  const ref = useScrollChat(chats.length);

  const handleLoadMore = useCallback(() => {
    setSizeToLoad((prev) => prev + chatPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeToLoad]);

  return (
    <div>
      <StyledList ref={ref}>
        {chats.length > sizeToLoad && (
          <li key="load-more" className="load-more">
            <button onClick={handleLoadMore}>Load more</button>
          </li>
        )}
        {chats.slice(-sizeToLoad).map((chat) => (
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
  li.load-more {
    text-align: center;
  }
  button {
    background-color: transparent;
    border: none;
    margin: 5px;
    font-weight: bold;
  }
`;
export default ChatList;
