import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePlaylistPage from "./pages/CreatePlaylistPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-playlist" element={<CreatePlaylistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
