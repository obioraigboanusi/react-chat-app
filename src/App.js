import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import { Provider } from "react-redux";
import SignIn from "./pages/SignIn";
import { store } from "./application/store";
import { ChannelContextProvider } from "./application/channelContext";

function App() {
  return (
    <Provider store={store}>
      <ChannelContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </ChannelContextProvider>
    </Provider>
  );
}

export default App;
