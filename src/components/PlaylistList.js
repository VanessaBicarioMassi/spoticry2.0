import React from "react";
import styled from "styled-components";

const PlaylistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const PlaylistCard = styled.div`
  background: var(--branco);
  border: 1px solid var(--turquesa);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--turquesa);
    margin-bottom: 10px;
  }

  p {
    color: var(--cinza-escuro);
  }
`;

const PlaylistList = ({ playlists }) => {
  if (!playlists || playlists.length === 0) {
    return <p>Nenhuma playlist encontrada.</p>;
  }

  return (
    <PlaylistContainer>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id}>
          <h3>{playlist.name}</h3>
          <p>{playlist.description}</p>
        </PlaylistCard>
      ))}
    </PlaylistContainer>
  );
};

export default PlaylistList;
