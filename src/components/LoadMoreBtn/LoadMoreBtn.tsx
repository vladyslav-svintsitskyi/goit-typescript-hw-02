import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button onClick={onClick} className={s.loadBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
