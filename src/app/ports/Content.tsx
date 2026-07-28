"use client";

import { useState } from "react";
import PortList from "./PortList";
import SearchBar from "./SearchBar";
import s from "./styles/Content.module.scss";

export default function Content() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={s.root}>
      <SearchBar setQuery={setSearchQuery} />
      <PortList query={searchQuery} />
    </div>
  );
}
