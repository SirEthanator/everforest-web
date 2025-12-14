import Cards from "./Cards";
import ColorStrips from "./ColorStrips";
import Header from "./Header";
import s from "./styles/Content.module.scss";

export default function Content() {
  return (
    <div className={s.root}>
      <Header />
      <ColorStrips />
      <Cards />
    </div>
  );
}
