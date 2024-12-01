import apiClient from "../utils/apiClient";

// Criar Playlist
export const createPlaylist = async (name, description, cover) => {
  try {
    const response = await apiClient.post("/playlists", {
      name,
      description,
      cover,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao criar a playlist";
  }
};

// Obter Playlist por ID
export const getPlaylistById = async (playlistId) => {
  try {
    const response = await apiClient.get(`/playlists/${playlistId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar a playlist";
  }
};
