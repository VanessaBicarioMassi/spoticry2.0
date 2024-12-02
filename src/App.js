import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePlaylistPage from "./pages/CreatePlaylistPage";
import LoginPage from "./pages/LoginPage";
import LoginLocalPage from "./pages/LoginLocalPage";
import PlaylistPage from "./pages/PlaylistPage";
import PlaylistTracksPage from "./pages/PlaylistTracksPage";
import AddTrackPage from "./pages/AddTrackPage";
import SearchPlaylistPage from "./pages/SearchPlaylistPage";
import DeletePlaylistPage from "./pages/DeletePlaylistPage";
import GlobalStyle from "./styles/GlobalStyle";
import RemoveTrackPage from "./pages/RemoveTrackPage";
import EditPlaylistPage from "./pages/EditPlaylistPage";
import UserPlaylistsPage from "./pages/UserPlaylistsPage";
import CreateSongPage from "./pages/CreateSongPage";
import AllSongsPage from "./pages/AllSongsPage";
import SongDetailsPage from "./pages/SongDetailsPage";
import EditSongPage from "./pages/EditSongPage";
import DeleteSongPage from "./pages/DeleteSongPage";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-local" element={<LoginLocalPage />} />
          <Route path="/create-playlist" element={<CreatePlaylistPage />} />
          <Route path="/playlists" element={<PlaylistPage />} />
          <Route path="/playlists/:id/tracks" element={<PlaylistTracksPage />} />
          <Route path="/playlists/:id/add-track" element={<AddTrackPage />} />
          <Route path="/playlists/:id/delete" element={<DeletePlaylistPage />} />
          <Route path="/playlists/search" element={<SearchPlaylistPage />} />
          <Route path="/playlists/:id/song/:songId/remove" element={<RemoveTrackPage />} />
          <Route path="/playlists/:id/edit" element={<EditPlaylistPage />} />
          <Route path="/playlists/user/:userId" element={<UserPlaylistsPage />} />
          <Route path="/songs/create" element={<CreateSongPage />} />
          <Route path="/songs" element={<AllSongsPage />} />
          <Route path="/songs/:id" element={<SongDetailsPage />} />
          <Route path="/songs/:id/edit" element={<EditSongPage />} />
          <Route path="/songs/:id/delete" element={<DeleteSongPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
