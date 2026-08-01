import { IconExternalLink, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import type { Port } from "@/data/types/ports";
import { categoryIconMap } from "./data";
import { searchPorts } from "./fuzzy-search";
import s from "./styles/Ports.module.scss";

function Item({ title, url, category, author, authorUrl }: Port) {
  const Icon = categoryIconMap[category];

  return (
    <div className={s.item}>
      <div className={s.itemContent}>
        <div className={s.itemIcon}>
          <Icon />
        </div>

        <div className={s.itemText}>
          <h5 className={s.itemTitle}>{title}</h5>
          <Link className={s.itemAuthor} href={authorUrl} target="_blank">
            by {author}
          </Link>
        </div>

        <Link className={`${s.openBtn} linkButton`} href={url} target="_blank">
          <IconExternalLink />
          Open
        </Link>
      </div>
    </div>
  );
}

export type PortListProps = {
  query: string;
};

export default function PortList({ query }: PortListProps) {
  const filtered_ports = searchPorts(query);

  if (filtered_ports.length > 0) {
    return (
      <div className={s.ports}>
        {filtered_ports.map((item) => (
          <Item {...item} key={item.title + item.author} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={s.noResults}>
        <IconSearch className={s.noResultsIcon} />
        <h3 className={s.noResultsText}>No results found for "{query}"</h3>
      </div>
    );
  }
}
