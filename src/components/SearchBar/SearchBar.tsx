import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { ImSearch } from "react-icons/im";

interface SearchBarProps {
  onSearchChanged: (newQuery: string) => void;
}

const SearchBar = ({ onSearchChanged }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) {
      toast.error("Please enter your query!");
      return;
    }
    onSearchChanged(value.trim());
    setValue("");
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={s.button} type="submit">
          <ImSearch className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
