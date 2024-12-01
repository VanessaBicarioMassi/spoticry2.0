import React, { useState } from "react";
import { searchPlaylists } from "../services/playlistServices";
import SearchForm from "../components/SearchForm";
import PlaylistList from "../components/PlaylistList";

const SearchPlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (title) => {
    try {
      const data = await searchPlaylists(title);
      setPlaylists(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Erro ao buscar playlists");
    }
  };

  return (
    <div>
      <h1>Buscar Playlists</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <PlaylistList playlists={playlists} />
    </div>
  );
};

export default SearchPlaylistPage;
