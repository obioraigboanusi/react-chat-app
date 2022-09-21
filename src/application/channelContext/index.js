import { createContext, useCallback, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewChat } from "../chat/chatSlice";

const ChannelContext = createContext(null);
const channel = new BroadcastChannel("reactChatApp");

const ChannelContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const postChat = useCallback((chat) => {
    channel.postMessage(chat);
    dispatch(addNewChat(chat));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    channel.addEventListener("message", (e) => {
      dispatch(addNewChat(e.data));
    });

    return () => {
      channel.close();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChannelContext.Provider value={{ postChat }}>
      {children}
    </ChannelContext.Provider>
  );
};

const useChannelContext = () => {
  return useContext(ChannelContext);
};

export { ChannelContextProvider, useChannelContext };
