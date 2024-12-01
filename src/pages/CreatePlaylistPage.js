import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: var(--branco);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: var(--turquesa);
`;

const CreatePlaylistForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, cover });
  };

  return (
    <FormContainer>
      <Title>Criar Playlist</Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Playlist"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Capa (URL)"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <button type="submit">Criar</button>
      </form>
    </FormContainer>
  );
};

export default CreatePlaylistForm;
