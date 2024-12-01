import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 20px auto;
  max-width: 400px;
`;

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da playlist"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </FormContainer>
  );
};

export default SearchForm;
