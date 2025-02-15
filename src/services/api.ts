import axios, { AxiosResponse } from "axios";
import { Image } from "../types/types";

const API_KEY = "VIXXOvoFq8egpCdmvVQPBqGknnpZMAVq2ii5fppABmw";
const API_URL = "https://api.unsplash.com/search/photos";

interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const { data }: AxiosResponse<FetchImagesResponse> = await axios.get(
    API_URL,
    {
      params: {
        query,
        page,
        per_page: 15,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );
  return data;
};
