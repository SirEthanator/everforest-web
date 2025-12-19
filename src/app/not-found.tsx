import { IconMoodPuzzled } from "@tabler/icons-react";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";
import s from "./not-found.module.scss";

export default function NotFound() {
  return (
    <PageTemplate>
      <div className={s.root}>
        <IconMoodPuzzled className={s.icon} />
        <div className={s.text}>
          <h1 className={s.heading}>404</h1>
          <h3 className={s.description}>Page not found</h3>
        </div>
        <Link href="/" className="linkButton">
          Return home
        </Link>
      </div>
    </PageTemplate>
  );
}
