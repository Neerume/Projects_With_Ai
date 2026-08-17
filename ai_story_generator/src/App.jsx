import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateStory from "./components/Create_story";
import GeneratingPage from "./components/GeneratingPage";
import GeneratedStory from "./components/GeneratedStory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreateStory />} />
      <Route path="/generating" element={<GeneratingPage />} />
      <Route path="/generated-story" element={<GeneratedStory />} />
    </Routes>
  );
}

export default App;
