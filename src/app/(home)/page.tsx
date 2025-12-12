import PageTemplate from "@/components/PageTemplate";
import Cards from "./Cards";
import ColorStrips from "./ColorStrips";
import Header from "./Header";

export default function Page() {
  return (
    <PageTemplate activePage="home" hideNavHeading>
      <Header />
      <ColorStrips />
      <Cards />
    </PageTemplate>
  );
}
