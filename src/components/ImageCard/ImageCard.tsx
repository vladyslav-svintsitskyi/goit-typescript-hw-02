import React from "react";
import s from "./ImageCard.module.css";
import { Image } from "../../types/types";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={s.card}>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
