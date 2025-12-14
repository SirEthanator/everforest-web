"use client";

import { useState } from "react";
import {
  type ContrastLevel,
  contrastLevels,
  dark,
  light
} from "@/utils/colors";
import Palette from "./Palette";
import s from "./styles/Palettes.module.scss";

export default function Palettes() {
  const [contrast, setContrast] = useState<ContrastLevel>("hard");
  const [darkCollapsed, setDarkCollapsed] = useState(false);
  const [lightCollapsed, setLightCollapsed] = useState(false);

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
              <Palette
                contrast={val}
                title="Dark"
                colors={dark}
                collapsed={darkCollapsed}
                setCollapsed={setDarkCollapsed}
              />
              <Palette
                contrast={val}
                title="Light"
                colors={light}
                collapsed={lightCollapsed}
                setCollapsed={setLightCollapsed}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
