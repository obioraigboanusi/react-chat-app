import { useEffect, useRef } from "react";

function useScrollChat(chats) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [chats]);
  return ref;
}

export default useScrollChat;
