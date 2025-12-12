"use client";

import { useCallback, useEffect, useState } from "react";
import s from "./styles/ColorStrips.module.scss";

const SLIDE_LENGTH = 900;
const SLIDE_DELAY = 2500;

const COLORS = [
  "bg-blue",
  "bg-red",
  "bg-yellow",
  "bg-green",
  "bg-visual",
  "bg-purple"
] as const;

type Color = (typeof COLORS)[number];

type StripProps = {
  idx: number;
};

function Strip({ idx }: StripProps) {
  const direction = idx % 2 === 0 ? "up" : "down";
  const [currentColorIdx, setCurrentColorIdx] = useState(idx);
  const [activeStrip, setActiveStrip] = useState<0 | 1>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateStrips = useCallback(() => {
    setActiveStrip((prev) => (prev === 1 ? 0 : 1));
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setCurrentColorIdx((prev) => prev + 1);
    }, SLIDE_LENGTH);
  }, []);

  useEffect(() => {
    rotateStrips();

    const interval = setInterval(() => {
      rotateStrips();
    }, SLIDE_DELAY + SLIDE_LENGTH);

    return () => clearInterval(interval);
  }, [rotateStrips]);

  return (
    <div className={s.strip}>
      {[0, 1].map((stripIdx: number) => {
        const yTranslation =
          (activeStrip === stripIdx || isAnimating
            ? 0
            : direction === "up"
              ? 100
              : -100) -
          stripIdx * 100;

        return (
          <div
            key={stripIdx}
            className={s.stripInner}
            style={{
              backgroundColor: `var(--${COLORS[activeStrip !== stripIdx || !isAnimating ? currentColorIdx % COLORS.length : (currentColorIdx + 1) % COLORS.length]})`,
              transform: `translateY(${yTranslation}%)`,
              transition: `transform ${SLIDE_LENGTH}ms ease-in-out`,
              zIndex: activeStrip === stripIdx ? "1" : "0"
            }}
          />
        );
      })}
    </div>
  );
}

export default function ColorStrips() {
  return (
    <div className={s.root}>
      {COLORS.map((startColor: Color, idx: number) => (
        <Strip idx={idx} key={startColor} />
      ))}
    </div>
  );
}
