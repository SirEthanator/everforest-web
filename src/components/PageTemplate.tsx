import Footer from "./Footer";
import type { NavBarProps } from "./NavBar";
import NavBar from "./NavBar";
import s from "./styles/PageTemplate.module.scss";

export type PageTemplateProps = NavBarProps & {
  hideNavHeading?: boolean;
  children?: React.ReactNode;
};

export default function PageTemplate({
  activePage,
  hideNavHeading,
  children
}: PageTemplateProps) {
  return (
    <div className={s.page}>
      <NavBar activePage={activePage} hideHeading={hideNavHeading} />
      {children}
      <Footer />
    </div>
  );
}
