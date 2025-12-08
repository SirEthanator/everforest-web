"use client";

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

function Color({ title, hex }: ColorType) {
  return (
    <div className={s.color}>
      <div className={s.colorContent}>
        <div className={s.swatch} style={{ backgroundColor: `#${hex}` }} />
        <p>{title}</p>
        <button className={s.copyBtn}>#{hex}</button>
      </div>
    </div>
  );
}

type PaletteProps = {
  contrast: ContrastLevel;
  colors: PaletteType;
};

function Palette({ contrast, colors }: PaletteProps) {
  return (
    <div className={s.palette}>
      {[...colors.common, ...colors[contrast]].map((color) => (
        <Color key={color.title} title={color.title} hex={color.hex} />
      ))}
    </div>
  );
}

export default function Palettes() {
  const [contrast, setContrast] = useState<ContrastLevel>("hard");

  return (
    <div className={s.root}>
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

      <div
        className={s.paletteCarousel}
        style={{
          transform: `translateX(${contrastLevels.indexOf(contrast) * -100}%)`
        }}
      >
        {contrastLevels.map((val: ContrastLevel) => {
          return (
            <div key={val} className={s.paletteGroup}>
              <Palette contrast={val} colors={dark} />
              <Palette contrast={val} colors={light} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
