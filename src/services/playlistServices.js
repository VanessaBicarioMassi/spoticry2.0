import apiClient from "../utils/apiClient";

// Criar Playlist
export const createPlaylist = async (name, description, cover) => {
  try {
    const response = await apiClient.post(
      "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist",
      { name, description, cover },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao criar a playlist";
  }
};

// Obter Todas as Playlists
export const getAllPlaylists = async () => {
  try {
    const response = await apiClient.get(
      "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as playlists";
  }
};

export const getPlaylistById = async (playlistId) => {
  try {
    const response = await apiClient.get(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar a playlist";
  }
};

// Buscar Playlist por Usuário
export const getPlaylistsByUser = async (userId) => {
  try {
    const response = await apiClient.get(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/user/${userId}/playlists`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar playlists do usuário";
  }
};

// Buscar Playlists
export const searchPlaylists = async (title) => {
  try {
    const response = await apiClient.get(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/search/${title}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar playlists";
  }
};

// Obter Faixas de uma Playlist
export const getPlaylistTracks = async (playlistId) => {
  try {
    const response = await apiClient.get(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}/song`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as faixas da playlist";
  }
};

// Adicionar Faixa à Playlist
export const addTrackToPlaylist = async (playlistId, songId) => {
  try {
    const response = await apiClient.post(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}/song`,
      { songId },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao adicionar a faixa na playlist";
  }
};

// Excluir Playlist
export const deletePlaylist = async (playlistId) => {
  try {
    const response = await apiClient.delete(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao deletar a playlist";
  }
};

// Remover Faixa de uma Playlist
export const removeTrackFromPlaylist = async (playlistId, songId) => {
  try {
    const response = await apiClient.delete(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}/song/${songId}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao remover a faixa da playlist";
  }
};

export const editPlaylist = async (playlistId, updatedDetails) => {
  try {
    const response = await apiClient.patch(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
      updatedDetails,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao editar a playlist";
  }
};
