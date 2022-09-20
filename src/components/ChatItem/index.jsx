import moment from "moment/moment";
import React from "react";
import styled, { css } from "styled-components";

function ChatItem({ message, isAuthor, author }) {
  return (
    <StyledChatItem isAuthor={isAuthor}>
      <div>
        {!isAuthor && <Avatar>{author.slice(0, 2).toUpperCase()}</Avatar>}
        <span>{isAuthor ? "You" : author}</span>
      </div>
      <div>
        <StyledMessage isAuthor={isAuthor}>{message}</StyledMessage>
      </div>
      <div>
        <p className="timestamp">{moment().calendar()}</p>
      </div>
    </StyledChatItem>
  );
}

const StyledChatItem = styled.div`
  display: flex;
  flex-direction: column;
  p,
  span {
    margin-bottom: 0;
  }
  ${({ isAuthor }) =>
    isAuthor
      ? css`
          align-items: flex-end;
        `
      : css`
          align-items: flex-start;
        `}
  & > div:first-of-type {
    display: flex;
    align-items: center;
    flex-direction: ${({ isAuthor }) => isAuthor && "row-reverse"};
    margin-bottom: 3px;
  }
  span {
    margin: 10px;
    font-size: 0.8rem;
  }
  p.timestamp {
    font-size: 0.7rem;
    margin-top: 3px;
  }
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 0.6rem;
  background-color: #eee;
  user-select: none;
`;
const StyledMessage = styled.p`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 3px;
  ${({ isAuthor }) =>
    isAuthor
      ? css`
          background-color: blueviolet;
          color: #fff;
        `
      : css`
          background-color: #eee;
        `};
`;
export default ChatItem;
