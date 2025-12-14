"use client"

import { useState } from "react";
import Ports from "./Ports";
import Search from "./Search";
import s from "./styles/Content.module.scss"

export default function Content() {
  const [query, setQuery] = useState("");

  return (
    <div className={s.root}>
      <Ports query={query} />
      <Search setQuery={setQuery} />
    </div>
  )
}
