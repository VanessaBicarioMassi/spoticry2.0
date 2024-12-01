import React from "react";
import { useParams } from "react-router-dom";
import { addTrackToPlaylist } from "../services/playlistServices";
import AddTrackForm from "../components/AddTrackForm";

const AddTrackPage = () => {
  const { id } = useParams();

  const handleAddTrack = async (trackData) => {
    try {
      const response = await addTrackToPlaylist(id, trackData);
      alert("Faixa adicionada com sucesso!");
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Adicionar Faixa à Playlist</h1>
      <AddTrackForm onSubmit={handleAddTrack} />
    </div>
  );
};

export default AddTrackPage;
