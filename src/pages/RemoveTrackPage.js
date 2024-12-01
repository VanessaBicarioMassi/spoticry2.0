import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { removeTrackFromPlaylist } from "../services/playlistServices";

const RemoveTrackPage = () => {
  const { id, songId } = useParams();
  const navigate = useNavigate();

  const handleRemoveTrack = async () => {
    try {
      const response = await removeTrackFromPlaylist(id, songId);
      alert(response.message || "Faixa removida com sucesso!");
      navigate(`/playlists/${id}/tracks`);
    } catch (error) {
      alert(error || "Erro ao remover a faixa da playlist");
    }
  };

  return (
    <div>
      <h1>Remover Faixa</h1>
      <p>Tem certeza que deseja remover esta faixa da playlist?</p>
      <button onClick={handleRemoveTrack}>Remover</button>
      <button onClick={() => navigate(`/playlists/${id}/tracks`)}>Cancelar</button>
    </div>
  );
};

export default RemoveTrackPage;
