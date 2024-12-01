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
