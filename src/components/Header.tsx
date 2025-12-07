import s from "./styles/Header.module.scss";

export type HeaderProps = {
  children: string;
};

export default function Header({ children }: HeaderProps) {
  return (
    <div className={s.header}>
      <div className={s.content}>
        <h1 className={s.title}>{children}</h1>
      </div>
    </div>
  );
}
