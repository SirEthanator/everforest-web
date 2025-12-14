import s from "./styles/Header.module.scss";

const COLORS = ["red", "yellow", "green", "blue", "purple", "aqua", "orange"];

export default function Header() {
  return (
    <div className={s.root}>
      <div className={s.titleBox}>
        <h1 className={`${s.title} siteTitle`}>EVERFOREST</h1>
        <div className={s.description}>
          <h3>Warm, Comfortable, Pleasant</h3>
          <p>
            Everforest is a green based color scheme; it's designed to be warm
            and soft in order to protect developers' eyes.
          </p>
        </div>
      </div>
      <div className={s.colorStrips}>
        {COLORS.map((color: string) => (
          <div
            key={color}
            className={s.colorStrip}
            style={{ backgroundColor: `var(--${color})` }}
          />
        ))}
      </div>
    </div>
  );
}
