import { IconChevronUp } from "@tabler/icons-react";
import type { ContrastLevel, Palette } from "@/data/types/colors";
import PaletteEntry from "./PaletteEntry";
import s from "./styles/Palette.module.scss";

export type PaletteViewProps = {
  title: string;
  contrast: ContrastLevel;
  colors: Palette;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PaletteView({
  title,
  contrast,
  colors,
  collapsed,
  setCollapsed
}: PaletteViewProps) {
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
            type="button"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <IconChevronUp />
          </button>
          <h2>{title}</h2>
        </div>
      </div>

      <div className={colorsClasses.join(" ")}>
        {[...colors.common, ...colors[contrast]].map((color) => (
          <PaletteEntry key={color.title} color={color} />
        ))}
      </div>
    </div>
  );
}
