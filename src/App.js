import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePlaylistPage from "./pages/CreatePlaylistPage";
import LoginPage from "./pages/LoginPage";
import LoginLocalPage from "./pages/LoginLocalPage";
import PlaylistPage from "./pages/PlaylistPage";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-local" element={<LoginLocalPage />} />
          <Route path="/create-playlist" element={<CreatePlaylistPage />} />
          <Route path="/playlists" element={<PlaylistPage />} /> {/* Listar todas */}
          <Route path="/playlists/:id" element={<PlaylistPage />} /> {/* Detalhes */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
