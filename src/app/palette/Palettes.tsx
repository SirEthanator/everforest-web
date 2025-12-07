"use client";

import { useState } from "react";
import { type ContrastLevel, contrastLevels } from "@/utils/colors";
import s from "./Palettes.module.scss";

export default function Palettes() {
  const [contrast, setContrast] = useState<ContrastLevel>("hard");

  return (
    <div className={s.palettes}>
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
