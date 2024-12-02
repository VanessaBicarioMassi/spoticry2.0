import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../services/songServices";

const SongDetailsPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const data = await getSongById(id);
        setSong(data.song);
      } catch (err) {
        setError(err.message || "Erro ao buscar os detalhes da música");
      }
    };
    fetchSongDetails();
  }, [id]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!song) {
    return <p>Carregando os detalhes da música...</p>;
  }

  return (
    <div>
      <h1>Detalhes da Música</h1>
      <p><strong>Título:</strong> {song.title}</p>
      <p><strong>Artista:</strong> {song.artist}</p>
      <p><strong>URL:</strong> <a href={song.url} target="_blank" rel="noopener noreferrer">{song.url}</a></p>
    </div>
  );
};

export default SongDetailsPage;
