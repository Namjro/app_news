const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const API_URL = {
  BASE: BASE_URL,

  // 🌐 Cấu trúc nhóm endpoint
  NEWS: {
    LIST: `${BASE_URL}/users`,
    DETAIL: (id: string) => `${BASE_URL}/news/${id}`,
  },
};
