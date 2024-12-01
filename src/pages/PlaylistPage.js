import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistById } from "../services/playlistServices";
import PlaylistDetails from "../components/PlaylistDetails";

const PlaylistPage = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await getPlaylistById(id);
        setPlaylist(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchPlaylist();
  }, [id]);

  if (error) {
    return <p>Erro ao carregar a playlist: {error}</p>;
  }

  return (
    <div>
      <h1>Detalhes da Playlist</h1>
      <PlaylistDetails playlist={playlist} />
    </div>
  );
};

export default PlaylistPage;
