import type { Metadata } from 'next';
import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Ports"
};

export default function Page() {
  return (
    <PageTemplate activePage="ports">
      <Header>Ports</Header>
      <Content />
    </PageTemplate>
  );
}
