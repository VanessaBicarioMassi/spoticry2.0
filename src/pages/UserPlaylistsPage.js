import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistsByUser } from "../services/playlistServices";
import PlaylistList from "../components/PlaylistList";

const UserPlaylistsPage = () => {
  const { userId } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const data = await getPlaylistsByUser(userId);
        setPlaylists(data);
      } catch (err) {
        setError(err.message || "Erro ao buscar playlists do usuário");
      }
    };
    fetchUserPlaylists();
  }, [userId]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!playlists || playlists.length === 0) {
    return <p>Nenhuma playlist encontrada para este usuário.</p>;
  }

  return (
    <div>
      <h1>Playlists do Usuário</h1>
      <PlaylistList playlists={playlists} />
    </div>
  );
};

export default UserPlaylistsPage;
