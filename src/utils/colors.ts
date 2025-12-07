export type Color = {
  title: string;
  hex: string;
};

export type Palette = {
  common: Color[];
  hard: Color[];
  medium: Color[];
  soft: Color[];
};

export const dark: Palette = {
  common: [
    { title: "Foreground", hex: "D3C6AA" },
    { title: "Red", hex: "E67E80" },
    { title: "Yellow", hex: "DBBC7F" },
    { title: "Green", hex: "A7C080" },
    { title: "Blue", hex: "7FBBB3" },
    { title: "Purple", hex: "D699B6" },
    { title: "Aqua", hex: "83C092" },
    { title: "Orange", hex: "E69875" },
    { title: "Statusline 1", hex: "A7C080" },
    { title: "Statusline 2", hex: "D3C6AA" },
    { title: "Statusline 3", hex: "E67E80" },
    { title: "Grey 0", hex: "7A8478" },
    { title: "Grey 1", hex: "859289" },
    { title: "Grey 2", hex: "9DA9A0" }
  ],
  hard: [
    { title: "Background Dim", hex: "1E2326" },
    { title: "Background 0", hex: "272E33" },
    { title: "Background 1", hex: "2E383C" },
    { title: "Background 2", hex: "374145" },
    { title: "Background 3", hex: "414B50" },
    { title: "Background 4", hex: "495156" },
    { title: "Background 5", hex: "4F5B58" },
    { title: "Background Red", hex: "493B40" },
    { title: "Background Yellow", hex: "45443C" },
    { title: "Background Green", hex: "3C4841" },
    { title: "Background Blue", hex: "384B55" },
    { title: "Background Purple", hex: "463F48" },
    { title: "Background Visual", hex: "4C3743" }
  ],
  medium: [
    { title: "Background Dim", hex: "232A2E" },
    { title: "Background 0", hex: "2D353B" },
    { title: "Background 1", hex: "343F44" },
    { title: "Background 2", hex: "3D484D" },
    { title: "Background 3", hex: "475258" },
    { title: "Background 4", hex: "4F585E" },
    { title: "Background 5", hex: "56635F" },
    { title: "Background Red", hex: "514045" },
    { title: "Background Yellow", hex: "4D4C43" },
    { title: "Background Green", hex: "425047" },
    { title: "Background Blue", hex: "3A515D" },
    { title: "Background Purple", hex: "4A444E" },
    { title: "Background Visual", hex: "543A48" }
  ],
  soft: [
    { title: "Background Dim", hex: "293136" },
    { title: "Background 0", hex: "333C43" },
    { title: "Background 1", hex: "3A464C" },
    { title: "Background 2", hex: "434F55" },
    { title: "Background 3", hex: "4D5960" },
    { title: "Background 4", hex: "555F66" },
    { title: "Background 5", hex: "5D6B66" },
    { title: "Background Red", hex: "59464C" },
    { title: "Background Yellow", hex: "55544A" },
    { title: "Background Green", hex: "48584E" },
    { title: "Background Blue", hex: "3F5865" },
    { title: "Background Purple", hex: "4E4953" },
    { title: "Background Visual", hex: "5C3F4F" }
  ]
};

export const light: Palette = {
  common: [
    { title: "Foreground", hex: "5C6A72" },
    { title: "Red", hex: "F85552" },
    { title: "Yellow", hex: "DFA000" },
    { title: "Green", hex: "8DA101" },
    { title: "Blue", hex: "3A94C5" },
    { title: "Purple", hex: "DF69BA" },
    { title: "Aqua", hex: "35A77C" },
    { title: "Orange", hex: "F57D26" },
    { title: "Statusline 1", hex: "93B259" },
    { title: "Statusline 2", hex: "708089" },
    { title: "Statusline 3", hex: "E66868" },
    { title: "Grey 0", hex: "A6B0A0" },
    { title: "Grey 1", hex: "939F91" },
    { title: "Grey 2", hex: "829181" }
  ],
  hard: [
    { title: "Background Dim", hex: "F2EFDF" },
    { title: "Background 0", hex: "FFFBEF" },
    { title: "Background 1", hex: "F8F5E4" },
    { title: "Background 2", hex: "F2EFDF" },
    { title: "Background 3", hex: "EDEADA" },
    { title: "Background 4", hex: "E8E5D5" },
    { title: "Background 5", hex: "BEC5B2" },
    { title: "Background Red", hex: "FFE7DE" },
    { title: "Background Yellow", hex: "FEF2D5" },
    { title: "Background Green", hex: "F3F5D9" },
    { title: "Background Blue", hex: "ECF5ED" },
    { title: "Background Purple", hex: "FCECED" },
    { title: "Background Visual", hex: "F0F2D4" }
  ],
  medium: [
    { title: "Background Dim", hex: "EFEBD4" },
    { title: "Background 0", hex: "FDF6E3" },
    { title: "Background 1", hex: "F4F0D9" },
    { title: "Background 2", hex: "EFEBD4" },
    { title: "Background 3", hex: "E6E2CC" },
    { title: "Background 4", hex: "E0DCC7" },
    { title: "Background 5", hex: "BDC3AF" },
    { title: "Background Red", hex: "FDE3DA" },
    { title: "Background Yellow", hex: "FAEDCD" },
    { title: "Background Green", hex: "F0F1D2" },
    { title: "Background Blue", hex: "E9F0E9" },
    { title: "Background Purple", hex: "FAE8E2" },
    { title: "Background Visual", hex: "EAEDC8" }
  ],
  soft: [
    { title: "Background Dim", hex: "E5DFC5" },
    { title: "Background 0", hex: "F3EAD3" },
    { title: "Background 1", hex: "EAE4CA" },
    { title: "Background 2", hex: "E5DFC5" },
    { title: "Background 3", hex: "DDD8BE" },
    { title: "Background 4", hex: "D8D3BA" },
    { title: "Background 5", hex: "B9C0AB" },
    { title: "Background Red", hex: "FADBD0" },
    { title: "Background Yellow", hex: "F1E4C5" },
    { title: "Background Green", hex: "E5E6C5" },
    { title: "Background Blue", hex: "E1E7DD" },
    { title: "Background Purple", hex: "F1DDD4" },
    { title: "Background Visual", hex: "E1E4BD" }
  ]
};
