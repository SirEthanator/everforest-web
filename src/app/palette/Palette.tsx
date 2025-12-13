import { IconChevronUp } from "@tabler/icons-react";
import type { ContrastLevel, Palette as PaletteType } from "@/utils/colors";
import Color from "./Color";
import s from "./styles/Palette.module.scss";

export type PaletteProps = {
  title: string;
  contrast: ContrastLevel;
  colors: PaletteType;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Palette({
  title,
  contrast,
  colors,
  collapsed,
  setCollapsed
}: PaletteProps) {
  const dropBtnClasses = [s.headingDropBtn];
  const colorsClasses = [s.paletteColors];
  if (collapsed) {
    dropBtnClasses.push(s.collapsed);
    colorsClasses.push(s.collapsed);
  }

  return (
    <div className={s.palette}>
      <div className={s.heading}>
        <div className={s.headingContent}>
          <button
            className={dropBtnClasses.join(" ")}
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <IconChevronUp />
          </button>
          <h2>{title}</h2>
        </div>
      </div>

      <div className={colorsClasses.join(" ")}>
        {[...colors.common, ...colors[contrast]].map((color) => (
          <Color key={color.title} title={color.title} hex={color.hex} />
        ))}
      </div>
    </div>
  );
}
