export interface ImageUrl {
  regular: string;
  small: string;
}

export interface Image {
  id: string;
  alt_description: string;
  urls: ImageUrl;
}

export interface FetchImagesParams {
  query: string;
  page?: number;
  perPage?: number;
}

export interface ImagesResponse {
  results: Image[];
}
