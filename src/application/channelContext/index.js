import { createContext, useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewChat } from "../chat/chatSlice";

const ChannelContext = createContext(null);
const channel = new BroadcastChannel("reactChatApp");

const ChannelContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const postChat = useCallback((chat) => {
    channel.postMessage(chat);
    dispatch(addNewChat(chat));
  }, []);

  useEffect(() => {
    channel.addEventListener("message", (e) => {
      dispatch(addNewChat(e.data));
    });

    return () => {
      channel.close();
    };
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
