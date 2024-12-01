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

// Obter todas as Playlists
export const getAllPlaylists = async () => {
  try {
    const response = await apiClient.get("/playlists");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as playlists";
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

// Buscar Playlists por termo
export const searchPlaylists = async (searchTerm) => {
  try {
    const response = await apiClient.get(`/playlists/search?term=${searchTerm}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar playlists";
  }
};

// Obter faixas de uma Playlist
export const getPlaylistTracks = async (playlistId) => {
  try {
    const response = await apiClient.get(`/playlists/${playlistId}/tracks`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as faixas da playlist";
  }
};

// Adicionar faixa à Playlist
export const addTrackToPlaylist = async (playlistId, trackData) => {
  try {
    const response = await apiClient.post(`/playlists/${playlistId}/tracks`, trackData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao adicionar a faixa na playlist";
  }
};

// Deletar Playlist
export const deletePlaylist = async (playlistId) => {
  try {
    const response = await apiClient.delete(`/playlists/${playlistId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao deletar a playlist";
  }
};
