import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlaylistById, editPlaylist } from "../services/playlistServices";

const EditPlaylistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlistDetails, setPlaylistDetails] = useState({ name: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await getPlaylistById(id);
        setPlaylistDetails({ name: data.name });
      } catch (err) {
        setError(err.message || "Erro ao buscar a playlist");
      }
    };
    fetchPlaylist();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlaylistDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editPlaylist(id, playlistDetails);
      alert(response.message || "Playlist editada com sucesso!");
      navigate(`/playlists`);
    } catch (err) {
      setError(err.message || "Erro ao editar a playlist");
    }
  };

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>Editar Playlist</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={playlistDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditPlaylistPage;
