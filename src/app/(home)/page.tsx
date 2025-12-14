import PageTemplate from "@/components/PageTemplate";
import Content from "./Content";

export default function Page() {
  return (
    <PageTemplate activePage="home" hideNavHeading>
      <Content />
    </PageTemplate>
  );
}
