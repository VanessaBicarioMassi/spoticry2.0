import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: var(--branco);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AddTrackForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, artist });
  };

  return (
    <FormContainer>
      <h2>Adicionar Faixa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Faixa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artista"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </FormContainer>
  );
};

export default AddTrackForm;
