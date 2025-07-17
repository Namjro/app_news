import { API_URL } from "../config/api";
import { mockFaces } from "../data/news.mock";
import { news } from "../types/news";
import { apiClient } from "./client";

const USE_MOCK = process.env.EXPO_PUBLIC_USE_MOCK === "true";

export async function fetchNewsList(): Promise<news[]> {
  if (USE_MOCK) {
    return new Promise((res) => setTimeout(() => res(mockFaces), 500));
  }

  const { data } = await apiClient.get<{ data: news[] }>(API_URL.NEWS.LIST);
  return data.data;
}

export async function fetchNewsDetail(id: string): Promise<news> {
  if (USE_MOCK) {
    const item = mockFaces.find((n) => n.id.toString() === id);
    return new Promise((res) => setTimeout(() => res(item!), 500));
  }

  const { data } = await apiClient.get<{ data: news }>(API_URL.NEWS.DETAIL(id));
  return data.data;
}


