import * as Tabler from "@tabler/icons-react";
import { z } from "zod";
import portsJson from "@/data/ports.json";
import { type Port, type PortCategory, portSchema } from "@/data/types/ports";

export const categoryIconMap: Record<PortCategory, React.ComponentType> = {
  None: Tabler.IconCube,
  IDEs: Tabler.IconCode,
  Editors: Tabler.IconPencil,
  "Terminal Emulators": Tabler.IconTerminal2,
  "Web Browsers": Tabler.IconWorld,
  "Website Themes": Tabler.IconAppWindow
} as const;

export const ports: Array<Port> = z.array(portSchema).parse(portsJson);
