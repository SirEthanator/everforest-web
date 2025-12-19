import type { Metadata } from "next";
import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import Palettes from "./Palettes";

export const metadata: Metadata = {
  title: "Palette"
};

export default function Page() {
  return (
    <PageTemplate activePage="palette">
      <Header>Palette</Header>
      <Palettes />
    </PageTemplate>
  );
}
