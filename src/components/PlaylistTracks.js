import React from "react";
import styled from "styled-components";

const TracksContainer = styled.div`
  margin-top: 20px;
`;

const TrackCard = styled.div`
  background: var(--branco);
  border: 1px solid var(--turquesa);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const PlaylistTracks = ({ tracks }) => {
  if (!tracks || tracks.length === 0) {
    return <p>Nenhuma faixa encontrada.</p>;
  }

  return (
    <TracksContainer>
      {tracks.map((track) => (
        <TrackCard key={track.id}>
          <h4>{track.name}</h4>
          <p>{track.artist}</p>
        </TrackCard>
      ))}
    </TracksContainer>
  );
};

export default PlaylistTracks;
