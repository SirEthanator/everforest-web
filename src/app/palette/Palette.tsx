import { IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import type { ContrastLevel, Palette as PaletteType } from "@/utils/colors";
import Color from "./Color";
import s from "./styles/Palette.module.scss";

export type PaletteProps = {
  title: string;
  contrast: ContrastLevel;
  colors: PaletteType;
};

export default function Palette({ title, contrast, colors }: PaletteProps) {
  const [collapsed, setCollapsed] = useState(false);
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
