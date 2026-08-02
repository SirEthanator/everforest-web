import { IconSearch, IconX } from "@tabler/icons-react";
import { useRef } from "react";
import s from "./styles/SearchBar.module.scss";

export type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.root}>
      <form
        className={s.content}
        onSubmit={(e) => {
          e.preventDefault();
          const isTouchScreen = window.matchMedia("(pointer: coarse)").matches;
          if (isTouchScreen) {
            inputRef.current?.blur();
          }
        }}
      >
        <IconSearch className={s.icon} />
        <input
          id="ports-search"
          className={s.input}
          ref={inputRef}
          type="search"
          placeholder="Search Ports..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.trim().length > 0 && (
          <button
            className={s.clearButton}
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <IconX />
          </button>
        )}
      </form>
    </div>
  );
}
