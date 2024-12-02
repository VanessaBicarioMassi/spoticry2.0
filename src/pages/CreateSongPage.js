import React, { useState } from "react";
import { createSong } from "../services/songServices";

const CreateSongPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    url: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

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
      const response = await createSong(formData);
      setMessage(response.message || "Música criada com sucesso!");
      setError(null);
      setFormData({ title: "", artist: "", url: "" });
    } catch (err) {
      setError(err.message || "Erro ao criar a música");
      setMessage(null);
    }
  };

  return (
    <div>
      <h1>Criar Nova Música</h1>
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
            required
          />
        </label>
        <button type="submit">Criar Música</button>
      </form>
    </div>
  );
};

export default CreateSongPage;
