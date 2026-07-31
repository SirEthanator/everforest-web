import { IconChevronUp } from "@tabler/icons-react";
import type { ContrastLevel, Palette } from "@/data/types/colors";
import { cn } from "@/utils/class-name";
import PaletteEntry from "./PaletteEntry";
import s from "./styles/PaletteView.module.scss";

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
  return (
    <div className={cn(s.palette, collapsed && s.collapsed)}>
      <div className={s.heading}>
        <div className={s.headingContent}>
          <button
            className={s.headingDropBtn}
            type="button"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <IconChevronUp />
          </button>
          <h3>{title}</h3>
          <h5 className={s.columnHeading}>RGB</h5>
          <h5 className={s.columnHeading}>Hex</h5>
        </div>
      </div>

      {!collapsed &&
        [...colors.common, ...colors[contrast]].map((color) => {
          return <PaletteEntry key={color.title} color={color} />;
        })}
    </div>
  );
}
