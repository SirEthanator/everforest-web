import { IconCube, IconExternalLink, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { categoryIconMap, ports as data, type Port } from "./data";
import s from "./styles/Ports.module.scss";

const sorted_data = data.sort((a: Port, b: Port) =>
  a.title.localeCompare(b.title)
);

function Item({ title, url, category, author, authorUrl }: Port) {
  const Icon = category ? categoryIconMap[category] : IconCube;

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

export type PortsProps = {
  query: string;
};

export default function Ports({ query }: PortsProps) {
  const filtered_data =
    query === ""
      ? sorted_data
      : sorted_data.filter((port) =>
          port.title.toLowerCase().includes(query.toLowerCase())
        );

  if (filtered_data.length > 0) {
    return (
      <div className={s.ports}>
        {filtered_data.map((item) => (
          <Item {...item} key={item.title + item.author} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={s.noResults}>
        <IconSearch className={s.noResultsIcon} />
        <h3>No results found for "{query}"</h3>
      </div>
    );
  }
}
