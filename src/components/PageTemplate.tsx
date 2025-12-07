import type { NavBarProps } from "./NavBar";
import NavBar from "./NavBar";
import s from "./styles/PageTemplate.module.scss";

export type PageTemplateProps = NavBarProps & {
  children?: React.ReactNode;
};

export default function PageTemplate({
  activePage,
  children
}: PageTemplateProps) {
  return (
    <div className={s.page}>
      <NavBar activePage={activePage} />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
