import React from "react";
import styled from "styled-components";

const SongContainer = styled.div`
  margin: 20px;
`;

const SongCard = styled.div`
  background: var(--branco);
  border: 1px solid var(--turquesa);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const SongList = ({ songs }) => {
  return (
    <SongContainer>
      {songs.map((song) => (
        <SongCard key={song.id}>
          <h3>{song.title}</h3>
          <p>Artista: {song.artist}</p>
          <p>Álbum: {song.album}</p>
        </SongCard>
      ))}
    </SongContainer>
  );
};

export default SongList;
