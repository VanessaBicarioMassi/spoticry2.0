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
  const [songId, setSongId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ songId });
  };

  return (
    <FormContainer>
      <h2>Adicionar Música à Playlist</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID da Música"
          value={songId}
          onChange={(e) => setSongId(e.target.value)}
          required
        />
        <button type="submit">Adicionar Música</button>
      </form>
    </FormContainer>
  );
};

export default AddTrackForm;
