import Fuse, { type IFuseOptions } from "fuse.js";
import type { Port } from "@/data/types/ports";
import { ports } from "./data";

const alphabetically_sorted_ports = ports.sort((a: Port, b: Port) =>
  a.title.localeCompare(b.title)
);

const searchOptions: IFuseOptions<Port> = {
  keys: [
    { name: "title", weight: 0.7 },
    { name: "author", weight: 0.3 }
  ],
  threshold: 0.3,
  distance: 100,
  minMatchCharLength: 1
};

const fuse = new Fuse(alphabetically_sorted_ports, searchOptions);

export function searchPorts(query: string): Array<Port> {
  if (query.trim().length < 1) {
    return alphabetically_sorted_ports;
  }

  return fuse.search(query.trim()).map((result) => result.item);
}
