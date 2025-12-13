"use client";

import { useCallback, useEffect, useState } from "react";
import s from "./styles/ColorStrips.module.scss";

const SLIDE_LENGTH = 950;
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

type SlidingStripProps = {
  idx: number;
  tick: number;
};

function SlidingStrip({ idx, tick }: SlidingStripProps) {
  const direction = idx % 2 === 0 ? "up" : "down";
  const [currentColorIdx, setCurrentColorIdx] = useState(idx);
  const [activeStrip, setActiveStrip] = useState<0 | 1>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateStrips = useCallback(() => {
    setActiveStrip((prev) => (prev === 1 ? 0 : 1));
    setCurrentColorIdx((prev) => prev + 1);
    setIsAnimating(true);

    return setTimeout(() => {
      setIsAnimating(false);
    }, SLIDE_LENGTH);
  }, []);

  useEffect(() => {
    // tick is not needed for any logic, it is to control
    // when this effect should fire in order to synchronise
    // all the strips rotating.
    void tick;

    const timeout = rotateStrips();

    return () => clearTimeout(timeout);
  }, [tick, rotateStrips]);

  return (
    <div className={s.strip}>
      {[0, 1].map((stripIdx: number) => {
        // If this is the active strip position is 0
        // It is also 0 if the animation is in progress so
        // that it is still visible before moving up/down
        // to where it will start from (the bottom if direction
        // is up or the top if direction is down).
        const yTranslation =
          (activeStrip === stripIdx || isAnimating
            ? 0
            : direction === "up"
              ? 100
              : -100) -
          // Subtract 100 from second strip since its base pos is greater by 100%
          stripIdx * 100;

        // If this is the active strip, use the current color, otherwise
        // use the previous one so it is still showing during the animation.
        const bg =
          COLORS[
            (currentColorIdx - (activeStrip === stripIdx ? 0 : 1)) %
              COLORS.length
          ];

        return (
          <div
            key={stripIdx}
            className={s.stripInner}
            style={{
              backgroundColor: `var(--${bg})`,
              transform: `translateY(${yTranslation}%)`,
              // Ease in out expo
              transition: `transform ${SLIDE_LENGTH}ms cubic-bezier(0.87, 0, 0.13, 1)`,
              // The active strip should always be on top. This can create
              // the appearance of it pushing the old strip out when really
              // it's just sliding over it.
              zIndex: activeStrip === stripIdx ? "1" : "0"
            }}
          />
        );
      })}
    </div>
  );
}

export default function ColorStrips() {
  // To synchronise effects of the strips
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Each strip's effect will fire when tick changes.
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);

      // SLIDE_LENGTH is added because each strip's effect
      // contains a timeout of delay SLIDE_LENGTH.
    }, SLIDE_DELAY + SLIDE_LENGTH);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.root}>
      {COLORS.map((startColor: Color, idx: number) => (
        <SlidingStrip idx={idx} tick={tick} key={startColor} />
      ))}
    </div>
  );
}
