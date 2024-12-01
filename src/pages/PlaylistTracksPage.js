import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistTracks } from "../services/playlistServices";
import PlaylistTracks from "../components/PlaylistTracks";

const PlaylistTracksPage = () => {
  const { id } = useParams();
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getPlaylistTracks(id);
        setTracks(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Erro ao buscar as faixas");
      }
    };

    fetchTracks();
  }, [id]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>Faixas da Playlist</h1>
      <PlaylistTracks tracks={tracks} />
    </div>
  );
};

export default PlaylistTracksPage;
