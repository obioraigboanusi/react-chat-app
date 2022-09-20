import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import SignIn from "./pages/SignIn";

import { Provider } from "react-redux";
import { store } from "./application/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Provider>
  );
}

export default App;
