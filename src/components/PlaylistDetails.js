import React from "react";

const PlaylistDetails = ({ playlist }) => {
  if (!playlist) {
    return <p>Carregando os detalhes da playlist...</p>;
  }

  return (
    <div>
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      <ul>
        {playlist.tracks.map((track) => (
          <li key={track.id}>
            {track.name} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDetails;
