import React, { useEffect, useState } from "react";
import { getAllPlaylists } from "../services/playlistServices";
import PlaylistList from "../components/PlaylistList";

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const data = await getAllPlaylists();
        setPlaylists(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Erro ao carregar as playlists");
      }
    };

    fetchPlaylists();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>Todas as Playlists</h1>
      <PlaylistList playlists={playlists} />
    </div>
  );
};

export default PlaylistPage;
