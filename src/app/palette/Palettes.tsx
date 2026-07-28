"use client";

import { useState } from "react";
import { contrastLevels, dark, light } from "@/data/colors";
import type { ContrastLevel } from "@/data/types/colors";
import PaletteView from "./PaletteView";
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
              type="button"
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
              <PaletteView
                contrast={val}
                title="Dark"
                colors={dark}
                collapsed={darkCollapsed}
                setCollapsed={setDarkCollapsed}
              />
              <PaletteView
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
