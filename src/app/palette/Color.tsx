import { IconCheck, IconCopy, IconX } from "@tabler/icons-react";
import { useState } from "react";
import type { Color as ColorType } from "@/utils/colors";
import s from "./styles/Color.module.scss";

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

export default function Color({ title, hex }: ColorType) {
  const [btnState, setBtnState] = useState<CopyBtnState>("idle");
  const [btnTimeout, setBtnTimeout] = useState<NodeJS.Timeout | null>(null);

  const CopyBtnIcon = copyBtnIconMap[btnState];
  const copyBtnText = copyBtnTextMap[btnState] ?? `#${hex}`;
  const copyBtnColor = copyBtnColorMap[btnState];

  return (
    <div className={s.color}>
      <div className={s.content}>
        <div className={s.swatch} style={{ backgroundColor: `#${hex}` }} />
        <h5 className={s.title}>{title}</h5>
        <button
          className={s.copyBtn}
          type="button"
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
