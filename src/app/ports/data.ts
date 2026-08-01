import * as Tabler from "@tabler/icons-react";
import portsJson from "@/data/ports.json";
import type { Port, PortCategory } from "@/data/types/ports";

export const categoryIconMap: Record<PortCategory, React.ComponentType> = {
  Miscellaneous: Tabler.IconCube,
  IDEs: Tabler.IconCode,
  Editors: Tabler.IconPencil,
  "Terminal Emulators": Tabler.IconTerminal2,
  "Web Browsers": Tabler.IconWorld,
  "Website Themes": Tabler.IconAppWindow
} as const;

// Validated by prebuild script
export const ports: Array<Port> = portsJson as unknown as Array<Port>;
