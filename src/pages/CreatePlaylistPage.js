import React from "react";
import { createPlaylist } from "../services/playlistServices";
import CreatePlaylistForm from "../components/CreatePlaylistForm";

const CreatePlaylistPage = () => {
  const handleCreatePlaylist = async ({ name, description, cover }) => {
    try {
      const data = await createPlaylist(name, description, cover);
      alert("Playlist criada com sucesso!");
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Criar Nova Playlist</h1>
      <CreatePlaylistForm onSubmit={handleCreatePlaylist} />
    </div>
  );
};

export default CreatePlaylistPage;
