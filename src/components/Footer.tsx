import Link from "next/link";
import s from "./styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={s.root}>
      <p className={s.text}>
        © Copyright 2025 Ethan M. Website design and development by Ethan M.
        Color scheme "Everforest" created by{" "}
        <Link href="https://github.com/sainnhe" target="_blank">
          Sainnhe Park
        </Link>
        . All rights reserved.
      </p>
    </div>
  );
}
