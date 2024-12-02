import apiClient from "../utils/apiClient";

export const createSong = async (songDetails) => {
    try {
      const response = await apiClient.post(
        "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song",
        songDetails,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao criar a música";
    }
};
  
export const getAllSongs = async () => {
  try {
    const response = await apiClient.get(
      "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao buscar as músicas";
  }
};

export const getSongById = async (songId) => {
    try {
      const response = await apiClient.get(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${songId}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao buscar os detalhes da música";
    }
};

export const editSong = async (songId, updatedDetails) => {
    try {
      const response = await apiClient.patch(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${songId}`,
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
      throw error.response?.data?.message || "Erro ao editar a música";
    }
};

export const deleteSong = async (songId) => {
    try {
      const response = await apiClient.delete(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${songId}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao excluir a música";
    }
};

