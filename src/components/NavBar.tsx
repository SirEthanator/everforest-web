import Link from "next/link";
import s from "./styles/NavBar.module.scss";

export type NavPage = {
  id: "home" | "palette" | "ports";
  title: string;
  url: string;
};

export const pages: Array<NavPage> = [
  {
    id: "home",
    title: "Home",
    url: "/"
  },
  {
    id: "palette",
    title: "Palette",
    url: "/palette"
  },
  {
    id: "ports",
    title: "Ports",
    url: "/ports"
  }
];

export type NavBarProps = {
  activePage: NavPage["id"];
};

export default function NavBar({ activePage }: NavBarProps) {
  return (
    <div className={s.navBar}>
      <h2 className={s.heading}>Everforest</h2>

      <div className={s.linkList}>
        {pages.map((page) => {
          let classes = s.link;
          if (activePage === page.id) classes += " active";

          return (
            <Link key={page.id} href={page.url} className={classes}>
              {page.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
