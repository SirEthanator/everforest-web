import { IconCheck, IconCopy, IconX } from "@tabler/icons-react";
import { useState } from "react";
import type { Color } from "@/data/types/colors";
import s from "./styles/PaletteEntry.module.scss";

export type PaletteEntryProps = {
  color: Color;
};

export default function PaletteEntry({ color }: PaletteEntryProps) {
  const decorations = true; // TODO: Add a toggle

  return (
    <div className={s.color}>
      <div className={s.content}>
        <div
          className={s.swatch}
          style={{ backgroundColor: `${color.hexString(true)}` }}
        />
        <h5 className={s.title}>{color.title}</h5>
        <CopyButton text={color.rgbString(decorations)} />
        <CopyButton text={color.hexString(decorations)} />
      </div>
    </div>
  );
}

type CopyButtonState = "idle" | "success" | "fail";

const copyButtonIconMap: Record<CopyButtonState, React.ComponentType> = {
  idle: IconCopy,
  success: IconCheck,
  fail: IconX
} as const;

const copyButtonColorMap: Record<CopyButtonState, string> = {
  idle: "var(--fg)",
  success: "var(--green)",
  fail: "var(--red)"
} as const;

function CopyButton({ text }: { text: string }) {
  const [buttonState, setButtonState] = useState<CopyButtonState>("idle");
  const [stateTimeout, setStateTimeout] = useState<NodeJS.Timeout | null>(null);

  const Icon = copyButtonIconMap[buttonState];
  const color = copyButtonColorMap[buttonState];

  return (
    <button
      className={s.copyButton}
      type="button"
      style={{ color }}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setButtonState("success");
        } catch {
          setButtonState("fail");
        }

        if (stateTimeout) {
          clearTimeout(stateTimeout);
        }

        setStateTimeout(
          setTimeout(() => {
            setButtonState("idle");
            setStateTimeout(null);
          }, 2000)
        );
      }}
    >
      <Icon />
      {text}
    </button>
  );
}
