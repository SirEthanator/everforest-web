import { z } from "zod";

export const portCategory = z.enum([
  "Miscellaneous",
  "IDEs",
  "Editors",
  "Terminal Emulators",
  "Web Browsers",
  "Website Themes"
]);
export type PortCategory = z.infer<typeof portCategory>;

export const portSchema = z.object({
  title: z.string().nonempty(),
  author: z.string().nonempty(),
  authorUrl: z.httpUrl(),
  category: portCategory,
  url: z.httpUrl()
});
export type Port = z.infer<typeof portSchema>;
