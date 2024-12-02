import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSongById, editSong } from "../services/songServices";

const EditSongPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    url: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const data = await getSongById(id);
        setFormData({
          title: data.song.title,
          artist: data.song.artist,
          url: data.song.url,
        });
      } catch (err) {
        setError(err.message || "Erro ao buscar os detalhes da música");
      }
    };
    fetchSongDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editSong(id, formData);
      setMessage(response.message || "Música editada com sucesso!");
      setError(null);
      navigate("/songs");
    } catch (err) {
      setError(err.message || "Erro ao editar a música");
      setMessage(null);
    }
  };

  return (
    <div>
      <h1>Editar Música</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Artista:
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          URL:
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditSongPage;
