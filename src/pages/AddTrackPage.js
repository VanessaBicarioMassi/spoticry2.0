import React from "react";
import { useParams } from "react-router-dom";
import { addTrackToPlaylist } from "../services/playlistServices";
import AddTrackForm from "../components/AddTrackForm";

const AddTrackPage = () => {
  const { id } = useParams();

  const handleAddTrack = async ({ songId }) => {
    try {
      const response = await addTrackToPlaylist(id, songId);
      alert("Música adicionada com sucesso!");
      console.log(response);
    } catch (error) {
      alert(error || "Erro ao adicionar a música");
    }
  };

  return (
    <div>
      <h1>Adicionar Música à Playlist</h1>
      <AddTrackForm onSubmit={handleAddTrack} />
    </div>
  );
};

export default AddTrackPage;
