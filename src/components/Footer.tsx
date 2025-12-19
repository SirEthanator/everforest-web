import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import s from "./styles/Footer.module.scss";

const GITHUB_URL = "https://github.com/SirEthanator/everforest-web";

export default function Footer() {
  return (
    <div className={s.root}>
      <p>
        © Copyright 2025 Ethan M. Website design and development by Ethan M.
        Color scheme "Everforest" created by{" "}
        <Link href="https://github.com/sainnhe" target="_blank">
          Sainnhe Park
        </Link>
        . All rights reserved.
      </p>

      <Link className={s.githubLink} href={GITHUB_URL} target="_blank">
        <IconBrandGithub />
      </Link>
    </div>
  );
}
