import {
  IconAppWindow,
  IconCode,
  IconCube,
  IconPencil,
  IconTerminal2,
  IconWorld
} from "@tabler/icons-react";
import { z } from "zod";
import portsJson from "@/data/ports.json";
import { type Port, type PortCategory, portSchema } from "@/data/types/ports";

export const categoryIconMap: Record<PortCategory, React.ComponentType> = {
  None: IconCube,
  IDEs: IconCode,
  Editors: IconPencil,
  "Terminal Emulators": IconTerminal2,
  "Web Browsers": IconWorld,
  "Website Themes": IconAppWindow
} as const;

export const ports: Array<Port> = z.array(portSchema).parse(portsJson);
