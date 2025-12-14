import {
  IconApps,
  IconArrowNarrowRight,
  IconChristmasTree,
  IconColorSwatch,
  IconExternalLink
} from "@tabler/icons-react";
import Link from "next/link";
import s from "./styles/Cards.module.scss";

const cards: Array<CardProps> = [
  {
    icon: <IconColorSwatch />,
    title: "Beautiful Colors",
    desc: "Discover the carefully constructed palette of Everforest.",
    link: "/palette",
    linkText: "Palette"
  },
  {
    icon: <IconApps />,
    title: "Themes For All",
    desc: "Enjoy Everforest throughout your system with themes for popular applications.",
    link: "/ports",
    linkText: "Ports"
  },
  {
    icon: <IconChristmasTree />,
    title: "Where it Started",
    desc: "Check out the original color scheme created by Sainnhe Park for Vim.",
    link: "https://github.com/sainnhe/everforest",
    linkText: "Everforest",
    external: true
  }
];

type CardProps = {
  title: string;
  desc: string;
  link: string;
  linkText: string;
  external?: boolean;
  icon: React.ReactNode;
};

function Card({ title, desc, icon, link, linkText, external }: CardProps) {
  return (
    <Link
      className={s.cardWrapper}
      href={link}
      target={external ? "_blank" : undefined}
    >
      <div className={s.card}>
        <div className={s.cardIcon}>{icon}</div>

        <div className={s.cardText}>
          <h2>{title}</h2>
          <p>{desc}</p>

          <div className={s.cardLink}>
            <h5>{linkText}</h5>
            {external ? <IconExternalLink /> : <IconArrowNarrowRight />}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Cards() {
  return (
    <div className={s.root}>
      <div className={s.content}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
