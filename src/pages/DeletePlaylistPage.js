import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deletePlaylist } from "../services/playlistServices";

const DeletePlaylistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deletePlaylist(id);
      alert("Playlist deletada com sucesso!");
      navigate("/playlists"); 
    } catch (error) {
      alert(error || "Erro ao deletar a playlist");
    }
  };

  return (
    <div>
      <h1>Deletar Playlist</h1>
      <p>Tem certeza que deseja deletar esta playlist?</p>
      <button onClick={handleDelete}>Deletar</button>
      <button onClick={() => navigate("/playlists")}>Cancelar</button>
    </div>
  );
};

export default DeletePlaylistPage;
