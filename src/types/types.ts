export interface ImageUrl {
  regular: string;
  small: string;
}

export interface Image {
  id: string;
  alt_description: string;
  urls: ImageUrl;
}
