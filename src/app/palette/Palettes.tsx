"use client";

import { IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { contrastLevels, dark, light } from "@/data/colors";
import type { ContrastLevel } from "@/data/types/colors";
import { cn } from "@/utils/class-name";
import PaletteView from "./PaletteView";
import s from "./styles/Palettes.module.scss";

export default function Palettes() {
  const [contrast, setContrast] = useState<ContrastLevel>("hard");
  const [darkCollapsed, setDarkCollapsed] = useState(false);
  const [lightCollapsed, setLightCollapsed] = useState(false);
  const [decorationsEnabled, setDecorationsEnabled] = useState(true);

  return (
    <div className={s.root}>
      <div className={s.controlBar}>
        <div className={s.controlBarContent}>
          <div className={s.contrastButtonRow}>
            {contrastLevels.map((val: ContrastLevel) => (
              <button
                key={val}
                className={cn(s.contrastButton, val === contrast && s.active)}
                type="button"
                onClick={() => setContrast(val)}
              >
                {val.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className={cn(s.decorationsButton, decorationsEnabled && s.enabled)}
            type="button"
            onClick={() => setDecorationsEnabled((prev) => !prev)}
          >
            {decorationsEnabled ? <IconCheck /> : <IconX />}
            Decorations
          </button>
        </div>
      </div>

      <div
        className={s.paletteCarousel}
        style={{
          transform: `translateX(${contrastLevels.indexOf(contrast) * -100}%)`
        }}
      >
        {contrastLevels.map((contrastLevel: ContrastLevel) => (
          <div key={contrastLevel} className={s.paletteGroup}>
            <PaletteView
              title="Dark"
              colors={dark}
              collapsed={darkCollapsed}
              setCollapsed={setDarkCollapsed}
              contrast={contrastLevel}
              decorationsEnabled={decorationsEnabled}
            />
            <PaletteView
              title="Light"
              colors={light}
              collapsed={lightCollapsed}
              setCollapsed={setLightCollapsed}
              contrast={contrastLevel}
              decorationsEnabled={decorationsEnabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
