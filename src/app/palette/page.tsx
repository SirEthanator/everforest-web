import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import Palettes from "./Palettes";

export default function Page() {
  return (
    <PageTemplate activePage="palette">
      <Header>PALETTE</Header>
      <Palettes />
    </PageTemplate>
  );
}
