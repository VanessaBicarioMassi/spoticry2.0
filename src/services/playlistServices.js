import apiClient from "../utils/apiClient";

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

export const getPlaylistById = async (playlistId) => {
  try {
    const response = await apiClient.get(`/playlists/${playlistId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar a playlist";
  }
};

export const getAllPlaylists = async () => {
  try {
    const response = await apiClient.get("/playlists");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as playlists";
  }
};
