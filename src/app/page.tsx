import { LayoutColumn } from "@/components/layout/layout-column";
import { LayoutContainer } from "@/components/layout/layout-container";

export default function Home() {
  return (
    <LayoutContainer>
      <LayoutColumn small={12} large={3}>Col 1</LayoutColumn>
      <LayoutColumn small={1} medium={3}>Col 2</LayoutColumn>
      <LayoutColumn>Col 3</LayoutColumn>
      <LayoutColumn>Col 4</LayoutColumn>
      <LayoutColumn>Col 5</LayoutColumn>
      <LayoutColumn>Col 6</LayoutColumn>
      <LayoutColumn>Col 7</LayoutColumn>
      <LayoutColumn>Col 8</LayoutColumn>
      <LayoutColumn>Col 9</LayoutColumn>
      <LayoutColumn>Col 10</LayoutColumn>
      <LayoutColumn>Col 11</LayoutColumn>
      <LayoutColumn>Col 12</LayoutColumn>
    </LayoutContainer>
  );
}
