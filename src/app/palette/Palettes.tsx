"use client";

import { IconCheck, IconChevronUp, IconCopy, IconX } from "@tabler/icons-react";
import { useState } from "react";
import {
  type Color as ColorType,
  type ContrastLevel,
  contrastLevels,
  dark,
  light,
  type Palette as PaletteType
} from "@/utils/colors";
import s from "./Palettes.module.scss";

type CopyBtnState = "idle" | "success" | "fail";

const copyBtnIconMap = {
  idle: IconCopy,
  success: IconCheck,
  fail: IconX
} as const;

const copyBtnTextMap = {
  idle: null, // Gets set to the hex code by the Color component
  success: "Copied!",
  fail: "Failed!"
} as const;

const copyBtnColorMap = {
  idle: "var(--fg)",
  success: "var(--green)",
  fail: "var(--red)"
} as const;

function Color({ title, hex }: ColorType) {
  const [btnState, setBtnState] = useState<CopyBtnState>("idle");
  const [btnTimeout, setBtnTimeout] = useState<NodeJS.Timeout | null>(null);

  const CopyBtnIcon = copyBtnIconMap[btnState];
  const copyBtnText = copyBtnTextMap[btnState] ?? `#${hex}`;
  const copyBtnColor = copyBtnColorMap[btnState];

  return (
    <div className={s.color}>
      <div className={s.colorContent}>
        <div className={s.swatch} style={{ backgroundColor: `#${hex}` }} />
        <p className={s.colorTitle}>{title}</p>
        <button
          className={s.copyBtn}
          style={{ color: copyBtnColor }}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(`#${hex}`);
              setBtnState("success");
            } catch {
              setBtnState("fail");
            }

            if (btnTimeout) {
              clearTimeout(btnTimeout);
            }

            setBtnTimeout(
              setTimeout(() => {
                setBtnState("idle");
                setBtnTimeout(null);
              }, 2000)
            );
          }}
        >
          <CopyBtnIcon />
          {copyBtnText}
        </button>
      </div>
    </div>
  );
}

type PaletteProps = {
  title: string;
  contrast: ContrastLevel;
  colors: PaletteType;
};

function Palette({ title, contrast, colors }: PaletteProps) {
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

export default function Palettes() {
  const [contrast, setContrast] = useState<ContrastLevel>("hard");

  return (
    <div className={s.root}>
      <div
        className={s.paletteCarousel}
        style={{
          transform: `translateX(${contrastLevels.indexOf(contrast) * -100}%)`
        }}
      >
        {contrastLevels.map((val: ContrastLevel) => {
          return (
            <div key={val} className={s.paletteGroup}>
              <Palette contrast={val} title="Dark" colors={dark} />
              <Palette contrast={val} title="Light" colors={light} />
            </div>
          );
        })}
      </div>

      <div className={s.contrastPicker}>
        <div className={s.contrastPickerContent}>
          {contrastLevels.map((val: ContrastLevel) => (
            <button
              key={val}
              className={`${s.contrastBtn} ${val === contrast ? s.active : ""}`}
              onClick={() => setContrast(val)}
            >
              {val.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
