import { z } from "zod";
import portsJson from "@/data/ports.json";
import { portSchema } from "../src/data/types/ports";

const result = z.array(portSchema).safeParse(portsJson);

if (!result.success) {
  console.error("ERROR: Build failed: Found issues with ports.json");

  for (const issue of result.error.issues) {
    console.error(`Issue at item ${issue.path.join(" -> ")}: ${issue.message}`);
  }

  process.exit(1);
}

console.log("ports.json passed validation.");
