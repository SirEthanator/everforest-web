"use client"

import { useState } from "react";
import Ports from "./Ports";
import Search from "./Search";
import s from "./styles/Content.module.scss"

export default function Content() {
  const [query, setQuery] = useState("");

  return (
    <div className={s.root}>
      <Search setQuery={setQuery} />
      <Ports query={query} />
    </div>
  )
}
