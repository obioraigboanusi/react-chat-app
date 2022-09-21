import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./application/store";
import { ChannelContextProvider } from "./application/channelContext";
import Chat from "./pages/Chat";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChannelContextProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </ChannelContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
