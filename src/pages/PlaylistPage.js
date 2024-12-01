import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPlaylists, getPlaylistById } from "../services/playlistServices";
import PlaylistList from "../components/PlaylistList";

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const data = id
          ? await getPlaylistById(id)
          : await getAllPlaylists();
        id ? setPlaylistDetails(data) : setPlaylists(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Erro ao carregar playlists");
      }
    };

    fetchPlaylists();
  }, [id]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (id && playlistDetails) {
    return (
      <div>
        <h1>{playlistDetails.name}</h1>
        <p>{playlistDetails.description}</p>
        <ul>
          {playlistDetails.tracks.map((track) => (
            <li key={track.id}>{track.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Todas as Playlists</h1>
      <PlaylistList playlists={playlists} />
    </div>
  );
};

export default PlaylistPage;
