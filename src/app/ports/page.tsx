import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import Content from "./Content";

export default function Page() {
  return (
    <PageTemplate activePage="ports">
      <Header>Ports</Header>
      <Content />
    </PageTemplate>
  );
}
