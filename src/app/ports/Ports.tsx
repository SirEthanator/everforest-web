import { IconCube, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { ports as data, type Port } from "./data";
import s from "./styles/Ports.module.scss";

const sorted_data = data.sort((a: Port, b: Port) =>
  a.title.localeCompare(b.title)
);

function Item({ title, url, Icon }: Port) {
  const DisplayedIcon = Icon ?? IconCube;

  return (
    <Link className={s.item} href={url} target="_blank">
      <div className={s.itemContent}>
        <div className={s.itemIcon}>
          <DisplayedIcon />
        </div>

        <h5>{title}</h5>
        <button className={s.linkIcon}>
          <IconExternalLink className={s.linkIcon} />
          Open
        </button>
      </div>
    </Link>
  );
}

export type PortsProps = {
  query: string;
};

export default function Ports({ query }: PortsProps) {
  const filtered_data = query === "" ? sorted_data : sorted_data.filter((port) =>
    port.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={s.root}>
      {filtered_data.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </div>
  );
}
