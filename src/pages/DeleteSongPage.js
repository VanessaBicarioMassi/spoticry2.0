import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteSong } from "../services/songServices";

const DeleteSongPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await deleteSong(id);
      alert(response.message || "Música excluída com sucesso!");
      navigate("/songs");
    } catch (error) {
      alert(error || "Erro ao excluir a música");
    }
  };

  return (
    <div>
      <h1>Excluir Música</h1>
      <p>Tem certeza de que deseja excluir esta música?</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => navigate("/songs")}>Cancelar</button>
    </div>
  );
};

export default DeleteSongPage;
