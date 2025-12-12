import PageTemplate from "@/components/PageTemplate";
import Header from "./Header";
import ColorStrips from "./ColorStrips";
import Cards from "./Cards";

export default function Page() {
  return (
    <PageTemplate activePage="home" hideNavHeading>
      <Header />
      <ColorStrips />
      <Cards />
    </PageTemplate>
  );
}
