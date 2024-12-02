import React, { useState, useEffect } from "react";
import { getAllSongs } from "../services/songServices";
import SongList from "../components/SongList";

const AllSongsPage = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getAllSongs();
        setSongs(data);
      } catch (err) {
        setError(err.message || "Erro ao buscar as músicas");
      }
    };
    fetchSongs();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!songs || songs.length === 0) {
    return <p>Nenhuma música encontrada.</p>;
  }

  return (
    <div>
      <h1>Todas as Músicas</h1>
      <SongList songs={songs} />
    </div>
  );
};

export default AllSongsPage;
