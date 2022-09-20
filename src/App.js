import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
