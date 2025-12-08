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
      <div className={s.content}>
        <Link className={s.headingWrap} href="/">
          <h2 className={s.heading}>EVERFOREST</h2>
        </Link>

        <div className={s.linkList}>
          {pages.map((page) => {
            const classes = [s.link];
            if (activePage === page.id) classes.push(s.active);

            return (
              <Link key={page.id} href={page.url} className={s.linkWrap}>
                <div className={classes.join(" ")}>
                  <h4>{page.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
