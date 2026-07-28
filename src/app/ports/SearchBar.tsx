import { IconSearch } from "@tabler/icons-react";
import s from "./styles/Search.module.scss";

export type SearchBarProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setQuery }: SearchBarProps) {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <IconSearch className={s.icon} />
        <input
          className={s.input}
          type="search"
          placeholder="Search Ports..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
