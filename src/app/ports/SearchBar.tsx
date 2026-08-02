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
      <div className={s.content}>
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
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
          >
            <IconX />
          </button>
        )}
      </div>
    </div>
  );
}
