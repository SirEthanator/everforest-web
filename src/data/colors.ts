import { Color, type Palette } from "./types/colors";

export const contrastLevels = ["hard", "medium", "soft"] as const;

export const dark: Palette = {
  common: [
    Color.fromHex("Foreground", "#D3C6AA"),
    Color.fromHex("Red", "#E67E80"),
    Color.fromHex("Yellow", "#DBBC7F"),
    Color.fromHex("Green", "#A7C080"),
    Color.fromHex("Blue", "#7FBBB3"),
    Color.fromHex("Purple", "#D699B6"),
    Color.fromHex("Aqua", "#83C092"),
    Color.fromHex("Orange", "#E69875"),
    Color.fromHex("Statusline 1", "#A7C080"),
    Color.fromHex("Statusline 2", "#D3C6AA"),
    Color.fromHex("Statusline 3", "#E67E80"),
    Color.fromHex("Grey 0", "#7A8478"),
    Color.fromHex("Grey 1", "#859289"),
    Color.fromHex("Grey 2", "#9DA9A0")
  ],
  hard: [
    Color.fromHex("Background Dim", "#1E2326"),
    Color.fromHex("Background 0", "#272E33"),
    Color.fromHex("Background 1", "#2E383C"),
    Color.fromHex("Background 2", "#374145"),
    Color.fromHex("Background 3", "#414B50"),
    Color.fromHex("Background 4", "#495156"),
    Color.fromHex("Background 5", "#4F5B58"),
    Color.fromHex("Background Red", "#493B40"),
    Color.fromHex("Background Yellow", "#45443C"),
    Color.fromHex("Background Green", "#3C4841"),
    Color.fromHex("Background Blue", "#384B55"),
    Color.fromHex("Background Purple", "#463F48"),
    Color.fromHex("Background Visual", "#4C3743")
  ],
  medium: [
    Color.fromHex("Background Dim", "#232A2E"),
    Color.fromHex("Background 0", "#2D353B"),
    Color.fromHex("Background 1", "#343F44"),
    Color.fromHex("Background 2", "#3D484D"),
    Color.fromHex("Background 3", "#475258"),
    Color.fromHex("Background 4", "#4F585E"),
    Color.fromHex("Background 5", "#56635F"),
    Color.fromHex("Background Red", "#514045"),
    Color.fromHex("Background Yellow", "#4D4C43"),
    Color.fromHex("Background Green", "#425047"),
    Color.fromHex("Background Blue", "#3A515D"),
    Color.fromHex("Background Purple", "#4A444E"),
    Color.fromHex("Background Visual", "#543A48")
  ],
  soft: [
    Color.fromHex("Background Dim", "#293136"),
    Color.fromHex("Background 0", "#333C43"),
    Color.fromHex("Background 1", "#3A464C"),
    Color.fromHex("Background 2", "#434F55"),
    Color.fromHex("Background 3", "#4D5960"),
    Color.fromHex("Background 4", "#555F66"),
    Color.fromHex("Background 5", "#5D6B66"),
    Color.fromHex("Background Red", "#59464C"),
    Color.fromHex("Background Yellow", "#55544A"),
    Color.fromHex("Background Green", "#48584E"),
    Color.fromHex("Background Blue", "#3F5865"),
    Color.fromHex("Background Purple", "#4E4953"),
    Color.fromHex("Background Visual", "#5C3F4F")
  ]
};

export const light: Palette = {
  common: [
    Color.fromHex("Foreground", "#5C6A72"),
    Color.fromHex("Red", "#F85552"),
    Color.fromHex("Yellow", "#DFA000"),
    Color.fromHex("Green", "#8DA101"),
    Color.fromHex("Blue", "#3A94C5"),
    Color.fromHex("Purple", "#DF69BA"),
    Color.fromHex("Aqua", "#35A77C"),
    Color.fromHex("Orange", "#F57D26"),
    Color.fromHex("Statusline 1", "#93B259"),
    Color.fromHex("Statusline 2", "#708089"),
    Color.fromHex("Statusline 3", "#E66868"),
    Color.fromHex("Grey 0", "#A6B0A0"),
    Color.fromHex("Grey 1", "#939F91"),
    Color.fromHex("Grey 2", "#829181")
  ],
  hard: [
    Color.fromHex("Background Dim", "#F2EFDF"),
    Color.fromHex("Background 0", "#FFFBEF"),
    Color.fromHex("Background 1", "#F8F5E4"),
    Color.fromHex("Background 2", "#F2EFDF"),
    Color.fromHex("Background 3", "#EDEADA"),
    Color.fromHex("Background 4", "#E8E5D5"),
    Color.fromHex("Background 5", "#BEC5B2"),
    Color.fromHex("Background Red", "#FFE7DE"),
    Color.fromHex("Background Yellow", "#FEF2D5"),
    Color.fromHex("Background Green", "#F3F5D9"),
    Color.fromHex("Background Blue", "#ECF5ED"),
    Color.fromHex("Background Purple", "#FCECED"),
    Color.fromHex("Background Visual", "#F0F2D4")
  ],
  medium: [
    Color.fromHex("Background Dim", "#EFEBD4"),
    Color.fromHex("Background 0", "#FDF6E3"),
    Color.fromHex("Background 1", "#F4F0D9"),
    Color.fromHex("Background 2", "#EFEBD4"),
    Color.fromHex("Background 3", "#E6E2CC"),
    Color.fromHex("Background 4", "#E0DCC7"),
    Color.fromHex("Background 5", "#BDC3AF"),
    Color.fromHex("Background Red", "#FDE3DA"),
    Color.fromHex("Background Yellow", "#FAEDCD"),
    Color.fromHex("Background Green", "#F0F1D2"),
    Color.fromHex("Background Blue", "#E9F0E9"),
    Color.fromHex("Background Purple", "#FAE8E2"),
    Color.fromHex("Background Visual", "#EAEDC8")
  ],
  soft: [
    Color.fromHex("Background Dim", "#E5DFC5"),
    Color.fromHex("Background 0", "#F3EAD3"),
    Color.fromHex("Background 1", "#EAE4CA"),
    Color.fromHex("Background 2", "#E5DFC5"),
    Color.fromHex("Background 3", "#DDD8BE"),
    Color.fromHex("Background 4", "#D8D3BA"),
    Color.fromHex("Background 5", "#B9C0AB"),
    Color.fromHex("Background Red", "#FADBD0"),
    Color.fromHex("Background Yellow", "#F1E4C5"),
    Color.fromHex("Background Green", "#E5E6C5"),
    Color.fromHex("Background Blue", "#E1E7DD"),
    Color.fromHex("Background Purple", "#F1DDD4"),
    Color.fromHex("Background Visual", "#E1E4BD")
  ]
};
