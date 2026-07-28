import type { contrastLevels } from "../colors";

export class Color {
  readonly title: string;
  readonly r: number;
  readonly g: number;
  readonly b: number;

  constructor(title: string, r: number, g: number, b: number) {
    this.title = title;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static fromHex(title: string, hex: string): Color {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);

    return new Color(title, r, g, b);
  }

  hexString(decorate: boolean): string {
    const part = (n: number) => n.toString(16).padStart(2, "0").toUpperCase();
    return `${decorate ? "#" : ""}${part(this.r)}${part(this.g)}${part(this.b)}`;
  }

  rgbString(decorate: boolean): string {
    return `${decorate ? "rgb(" : ""}${this.r}, ${this.g}, ${this.b}${decorate ? ")" : ""}`;
  }
}

export type Palette = {
  common: Array<Color>;
  hard: Array<Color>;
  medium: Array<Color>;
  soft: Array<Color>;
};

export type ContrastLevel = (typeof contrastLevels)[number];
