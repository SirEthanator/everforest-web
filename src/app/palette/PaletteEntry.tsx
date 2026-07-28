import { IconCheck, IconCopy, IconX } from "@tabler/icons-react";
import { useState } from "react";
import type { Color } from "@/data/types/colors";
import s from "./styles/Color.module.scss";

type CopyBtnState = "idle" | "success" | "fail";

const copyBtnIconMap: Record<CopyBtnState, React.ComponentType> = {
  idle: IconCopy,
  success: IconCheck,
  fail: IconX
} as const;

const copyBtnTextMap: Record<CopyBtnState, string | null> = {
  idle: null, // Gets set to the hex code by the Color component
  success: "Copied!",
  fail: "Failed!"
} as const;

const copyBtnColorMap: Record<CopyBtnState, string> = {
  idle: "var(--fg)",
  success: "var(--green)",
  fail: "var(--red)"
} as const;

export type PaletteEntryProps = {
  color: Color;
};

export default function PaletteEntry({ color }: PaletteEntryProps) {
  const [btnState, setBtnState] = useState<CopyBtnState>("idle");
  const [btnTimeout, setBtnTimeout] = useState<NodeJS.Timeout | null>(null);

  const decorations = true; // TODO: Add a toggle

  const CopyBtnIcon = copyBtnIconMap[btnState];
  const copyBtnText =
    copyBtnTextMap[btnState] ?? `${color.hexString(decorations)}`;
  const copyBtnColor = copyBtnColorMap[btnState];

  return (
    <div className={s.color}>
      <div className={s.content}>
        <div
          className={s.swatch}
          style={{ backgroundColor: `${color.hexString(true)}` }}
        />
        <h5 className={s.title}>{color.title}</h5>
        <button
          className={s.copyBtn}
          type="button"
          style={{ color: copyBtnColor }}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(
                `${color.hexString(decorations)}`
              );
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
